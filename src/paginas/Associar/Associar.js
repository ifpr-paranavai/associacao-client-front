import "./estilo.css";
import React, { useEffect, useState, useRef } from "react";
import ServicoAssociado from "../../service/ServicoAssociado";
import { buscaCEP } from "../../service/ServicoCEP";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUploader from "../../componentes/ImageUploader/ImageUploader";
import { faUser, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import MaskedFormControl from "../../componentes/MaskedFormControl/MaskedFormControl";
import estados from "../../uteis/estados";
import { useNotify } from "../../contextos/Notificacao";
import ModalAssociar from "../../componentes/Modal";
import { removeMask } from "../../uteis/string";
import md5 from "md5";

export default function Associar(props) {
  //const isMobile = useMediaQuery("(max-width:600px)");
  const notify = useNotify();
  const numberRef = useRef(null);
  const [salvando, setSalvando] = useState(false);
  const [buscando, setBuscando] = useState(false);

  const [imagem, setImagem] = useState({ src: "", alt: "" });
  const [nome, setNome] = useState(""); // salvar sobrenome separado
  const [sobrenome, setSobrenome] = useState(""); // salvar sobrenome separado
  const [data_nascimento, setDataNascimento] = useState(null);
  const [cpf, setCPF] = useState("");
  const [rg, setRG] = useState("");
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
        email_alternativo,
        modalidade,
        perfil: "ASSOCIADO",
        senha: md5(senha),
        tel_celular,
        endereco,
      };

      //await ServicoAssociado.cadastrarAssociado(data);
      console.log(data);
      notify.showSuccess("Associado salvo com sucesso!");
      setTimeout(() => {
        props.onSave();
      }, 60);
      limparState();
    } catch (error) {
      notify.showError(error.response.data);
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

  async function findAddress() {
    try {
      setBuscando(true);
      const unmaskedCEP = removeMask(endereco.cep);
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
      notify.showError(error.response.data);
    } finally {
      setBuscando(false);
    }
  }

  useEffect(() => {
    console.log(endereco.cep);
    if (!endereco.cep || endereco.cep.length < 9) {
      return;
    }
    findAddress();
  }, [endereco.cep]);

  return (
    <Container className="mt-5 pt-5 ">
      <ModalAssociar></ModalAssociar>
      <Card className="efeito-card-form px-5 my-5">
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
                <FontAwesomeIcon color="blue" icon={faUser} size="1x" className="mr-2" />
                Dados do usuário
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="nome">
                <Form.Control
                  placeholder="Nome"
                  value={nome}
                  size="lg"
                  required
                  onChange={(event) => setNome(event.target.value)}
                />
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
                <FontAwesomeIcon icon={faPhoneAlt} size="1x" className="mr-2" />
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
                  name="tel_residencial"
                  size="lg"
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-6" controlId="telcom" as={Col}>
                <MaskedFormControl
                  mask="(11) 1111-1111"
                  placeholder="Telefone Comercial"
                  name="tel_comercial"
                  size="lg"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Control placeholder="E-mail" type="email" name="email" size="lg" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="emailalter" as={Col}>
                <Form.Control
                  placeholder="E-mal alternativo"
                  type="email"
                  name="email_alternativo"
                  size="lg"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Label column="lg" className="tamanho-texto">
                Modalidade Principal:
              </Form.Label>
              <Col>
                <Form.Check
                  className="tamanho-texto mt-2 mx-4"
                  type="radio"
                  name="modalidade"
                  checked={modalidade === "aeromodelismo"}
                  label="Aeromodelismo"
                  value="aeromodelismo"
                  onChange={(event) => setModalidade(event.target.value)}
                />
              </Col>
              <Col>
                <Form.Check
                  className="tamanho-texto mt-2 mx-4"
                  type="radio"
                  checked={modalidade === "automodelismo"}
                  name="modalidade"
                  label="Automodelismo"
                  value="automodelismo"
                  onChange={(event) => setModalidade(event.target.value)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Check
                name="receber_comunicado"
                className="tamanho-texto my-3 ml-2"
                type="checkbox"
                label="Aceito receber comunicados oficiais oriundos da diretoria da Amaer"
              />
            </Form.Row>
            <Form.Row>
              <h3 className="py-3">
                <FontAwesomeIcon icon={faHome} size="1x" className="mr-2" />
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
                  onChange={(event) => setEndereco({ ...endereco, cep: event.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-8" as={Col} controlId="rua">
                <Form.Control
                  placeholder="Rua"
                  label="Rua"
                  required
                  disabled={buscando}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, rua: event.target.value })}
                />
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-4" controlId="numero" as={Col}>
                <Form.Control
                  placeholder="Número"
                  value={endereco.numero}
                  required
                  disabled={buscando}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, numero: event.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="estado">
                <Form.Control
                  placeholder="Estado"
                  as="select"
                  name="estado"
                  size="lg"
                  defaultValue="PR"
                >
                  {estados.map((estado) => {
                    return (
                      <option label={estado.nome} value={estado.sigla} key={estado.sigla}></option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-sm-12 col-md-6" controlId="cidade" as={Col}>
                <Form.Control
                  placeholder="Cidade"
                  as="select"
                  name="cidade"
                  size="lg"
                  defaultValue="Maringá"
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-center mt-3">
              <Button size="lg" variant="secondary" type="submit">
                Enviar
              </Button>
            </Form.Row>
          </Form>
        </Row>
      </Card>
    </Container>
  );
}
