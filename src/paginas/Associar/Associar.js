import "./estilo.css";
import React, { useState, useRef } from "react";
// import ServicoAssociado from "../../service/ServicoAssociado";
import { buscaCEP } from "../../service/ServicoCEP";
import { Form, Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUploader from "../../componentes/ImageUploader/ImageUploader";
import { faUser, faHome, faPhoneAlt, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";
import MaskedFormControl from "../../componentes/MaskedFormControl/MaskedFormControl";
import ModalAssociar from "../../componentes/Modal";
import { removeMask } from "../../uteis/string";
import md5 from "md5";

export default function Associar(props) {
  //const isMobile = useMediaQuery("(max-width:600px)");
  const numberRef = useRef(null);
  const [salvando, setSalvando] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("error");

  const [imagem, setImagem] = useState({ src: "", alt: "" });
  const [nome, setNome] = useState(""); // salvar sobrenome separado
  const [sobrenome, setSobrenome] = useState(""); // salvar sobrenome separado
  const [data_nascimento, setDataNascimento] = useState(null);
  const [cpf, setCPF] = useState("");
  const [rg, setRG] = useState("");
  const [tel_residencial, setTelResidencial] = useState("");
  const [tel_comercial, setTelComercial] = useState("");
  const [receber_comunicado, setReceberComunicado] = useState(true);
  const [email, setEmail] = useState("");
  const [email_alternativo, setEmailAlternativo] = useState("");
  const [modalidade, setModalidade] = useState("aeromodelismo");
  const [senha, setSenha] = useState("");
  const [tel_celular, setCelular] = useState({ numero: "", whatsapp: false });
  const [endereco, setEndereco] = useState({
    cep: "",
    estado: "",
    cidade: "",
    rua: "",
    bairro: "",
    numero: "",
  });
  async function salvarAssociado(event) {
    event.preventDefault();
    try {
      setSalvando(true);
      const data = {
        imagem,
        nome,
        sobrenome,
        data_nascimento,
        rg,
        cpf,
        email,
        tel_residencial,
        tel_comercial,
        receber_comunicado,
        email_alternativo,
        modalidade,
        perfil: "ASSOCIADO",
        senha: md5(senha),
        tel_celular,
        endereco,
      };

      //await ServicoAssociado.cadastrarAssociado(data);
      console.log(data);
      //notify.showSuccess("Associado salvo com sucesso!");
      setTimeout(() => {
        props.onSave();
      }, 60);
      limparState();
    } catch (error) {
      //notify.showError(error.response.data);
    } finally {
      setSalvando(false);
    }
  }

  function limparState() {
    setImagem({ src: "", alt: "" });
    setNome("");
    setSobrenome("");
    setDataNascimento(null);
    setCPF("");
    setRG("");
    setEmail("");
    setEmailAlternativo("");
    setModalidade("aeromodelismo");
    setSenha("");
    setTelComercial("");
    setTelResidencial("");
    setReceberComunicado(true);
    setCelular({ numero: "", whatsapp: false });
    setEndereco({
      cep: "",
      estado: "",
      cidade: "",
      rua: "",
      bairro: "",
      numero: "",
    });
  }

  function fecharAlerta() {
    setAlerta(false);
    setTimeout(() => {
      setMensagem("");
      setTipoAlerta("error");
    }, 100);
  }

  function mostrarAlerta(tipo, mensagem) {
    setTimeout(() => {
      setMensagem(mensagem);
      setTipoAlerta(tipo);
    }, 100);
    setAlerta(true);
  }

  async function buscarEndereco() {
    const unmaskedCEP = removeMask(endereco.cep);

    if (unmaskedCEP?.length !== 8) {
      setEndereco({
        ...endereco,
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
      });
      return;
    }

    try {
      setBuscando(true);
      const address = await buscaCEP(unmaskedCEP);

      setEndereco({
        ...endereco,
        estado: address.state,
        cidade: address.city,
        bairro: address.neighborhood,
        rua: address.street,
      });

      setTimeout(() => {
        numberRef.current?.focus();
      }, 120);
    } catch (error) {
      console.log("deveria alertar");
      mostrarAlerta("error", "CEP inválido!");
      setEndereco({
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
      });
    } finally {
      setBuscando(false);
    }
  }

  return (
    <Container className="mt-5 pt-5 ">
      <Alert show={alerta} variant={tipoAlerta} onClose={fecharAlerta} dismissible>
        <Alert.Heading>Mensagem!</Alert.Heading>
        <p>{mensagem}</p>
      </Alert>
      <Card className="efeito-card-form px-5 my-5">
        <ModalAssociar></ModalAssociar>
        <Row className="justify-content-center mb-5 mx-5">
          <h1 className="my-3">Associe-se</h1>
        </Row>
        <Row className="justify-content-center mb-5 mx-5">
          <Form className="formulario-contato" onSubmit={(event) => salvarAssociado(event)}>
            <Form.Row>
              <Form.Group as={Col} controlId="imagem">
                <ImageUploader
                  image={imagem}
                  className="mr-1"
                  onUpload={(image) => setImagem(image)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <h3 className="py-3">
                <FontAwesomeIcon color="blue" icon={faPlane} size="1x" className="mr-2" />
                <FontAwesomeIcon color="blue" icon={faCar} size="1x" className="mr-2" />
                Modalidade Principal
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Check
                className="tamanho-texto mt-2 mx-4"
                type="radio"
                name="modalidade"
                checked={modalidade === "aeromodelismo"}
                label="Aeromodelismo"
                value="aeromodelismo"
                onChange={(event) => setModalidade(event.target.value)}
              />
              <Form.Check
                className="tamanho-texto mt-2 mx-4"
                type="radio"
                checked={modalidade === "automodelismo"}
                name="modalidade"
                label="Automodelismo"
                value="automodelismo"
                onChange={(event) => setModalidade(event.target.value)}
              />
            </Form.Row>
            <Form.Row>
              <h3 className="py-3">
                <FontAwesomeIcon color="blue" icon={faUser} size="1x" className="mr-2" />
                Dados do usuário
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="nome">
                <FloatingLabel controlId="floatingNome" label="Nome">
                  <Form.Control
                    placeholder="Nome"
                    value={nome}
                    size="lg"
                    required
                    onChange={(event) => setNome(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="sobrenome">
                <Form.Control
                  placeholder="Sobrenome"
                  value={sobrenome}
                  size="lg"
                  required
                  onChange={(event) => setSobrenome(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="dataNasc">
                <Form.Control
                  type="date"
                  placeholder="Data de Nascimento"
                  value={data_nascimento}
                  size="lg"
                  required
                  onChange={(value) => setDataNascimento(value)}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-6" controlId="" as={Col}>
                <MaskedFormControl
                  placeholder="CPF"
                  value={cpf}
                  size="lg"
                  mask="111.111.111-11"
                  required
                  maskChar={null}
                  onChange={(event) => setCPF(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="rg">
                <Form.Control
                  placeholder="RG"
                  value={rg}
                  size="lg"
                  required
                  onChange={(event) => setRG(event.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <h3 className="py-3">
                <FontAwesomeIcon color="blue" icon={faPhoneAlt} size="1x" className="mr-2" />
                Contato
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="telcel">
                <MaskedFormControl
                  mask="(11) 1 1111-1111"
                  placeholder="Telefone Celular"
                  value={tel_celular.numero}
                  size="lg"
                  onChange={(event) => setCelular({ ...tel_celular, numero: event.target.value })}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-6" controlId="whatsapp" as={Col}>
                <Form.Check
                  className="tamanho-texto ml-3 mt-2"
                  type="checkbox"
                  checked={tel_celular.whatsapp}
                  label="Celular com WhatsApp?"
                  onChange={() => setCelular({ ...tel_celular, whatsapp: !tel_celular.whatsapp })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="telresi">
                <MaskedFormControl
                  mask="(11) 1111-1111"
                  placeholder="Telefone Residencial"
                  value={tel_residencial}
                  onChange={(event) => setTelResidencial(event.target.value)}
                  size="lg"
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-6" controlId="telcom" as={Col}>
                <MaskedFormControl
                  mask="(11) 1111-1111"
                  placeholder="Telefone Comercial"
                  value={tel_comercial}
                  onChange={(event) => setTelComercial(event.target.value)}
                  size="lg"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Control
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  size="lg"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="emailalter" as={Col}>
                <Form.Control
                  placeholder="E-mal alternativo"
                  type="email"
                  name="email_alternativo"
                  size="lg"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <h3 className="py-3">
                <FontAwesomeIcon color="blue" icon={faHome} size="1x" className="mr-2" />
                Endereço
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-4" controlId="cep" as={Col}>
                <MaskedFormControl
                  placeholder="CEP"
                  value={endereco.cep}
                  disabled={buscando}
                  size="lg"
                  mask="11111-111"
                  maskChar={null}
                  required
                  onChange={buscarEndereco()}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-8" as={Col} controlId="rua">
                <Form.Control
                  placeholder="Rua"
                  value={endereco.rua}
                  required
                  disabled={buscando || removeMask(endereco.cep).length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, rua: event.target.value })}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-4" controlId="numero" as={Col}>
                <Form.Control
                  placeholder="Número"
                  value={endereco.numero}
                  required
                  disabled={buscando || removeMask(endereco.cep).length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, numero: event.target.value })}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-8" as={Col} controlId="rua">
                <Form.Control
                  placeholder="Bairro"
                  value={endereco.bairro}
                  required
                  disabled={buscando || removeMask(endereco.cep).length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, bairro: event.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="estado">
                <Form.Control
                  placeholder="Estado"
                  value={endereco.estado}
                  required
                  disabled={buscando || !endereco.cep?.length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, estado: event.target.value })}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-6" controlId="cidade" as={Col}>
                <Form.Control
                  placeholder="Cidade"
                  value={endereco.cidade}
                  disabled={buscando || !endereco.cep?.length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, cidade: event.target.value })}
                ></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Check
                checked={receber_comunicado}
                className="tamanho-texto my-3 ml-2"
                type="checkbox"
                size="lg"
                label="Aceito receber comunicados oficiais oriundos da diretoria da Amaer"
                onChange={(event) => setReceberComunicado(event.target.checked)}
              />
            </Form.Row>
            <Form.Row className="justify-content-center mt-3">
              <Button size="lg" variant="danger" className="mr-1" onClick={limparState}>
                Cancelar
              </Button>
              <Button size="lg" variant="success" className="ml-1" type="submit">
                Enviar
              </Button>
            </Form.Row>
          </Form>
        </Row>
      </Card>
    </Container>
  );
}
