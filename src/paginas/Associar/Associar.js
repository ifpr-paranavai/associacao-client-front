import "./estilo.css";
import React, { useEffect, useState, useRef } from "react";
import ServicoAssociado from "../../service/ServicoAssociado";
import { buscaCEP } from "../../service/ServicoCEP";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faPhoneAlt, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";
import MaskedFormControl from "../../componentes/MaskedFormControl/MaskedFormControl";
import ModalAssociar from "../../componentes/Modal";
import { removeMask } from "../../uteis/string";
import md5 from "md5";

import CustomToast from "../../componentes/toast/CustomToast"

export default function Associar(props) {
  const [showToast, setShowToast] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");
  const [toastMessage, setToastMessage] = useState("");
  const [apiOnline, setApiOnline] = useState(false);

  const handleToastClose = () => {
    setShowToast(false);
    setToastMessage("");
  };

  const numberRef = useRef(null);
  const [salvando, setSalvando] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("error");
  const [validated, setValidated] = useState(false);
  const [associado, setAssociado] = useState({
    nome: "",
    sobrenome: "",
    data_nascimento: null,
    rg: "",
    cpf: "",
    email: "",
    tel_residencial: "",
    tel_comercial: "",
    email_alternativo: "",
    modalidade: "aeromodelismo",
    perfil: "ASSOCIADO",
    senha: "",
  });
  const [tel_celular, setCelular] = useState({ numero: "", whatsapp: false });
  const [receber_comunicado, setReceberComunicado] = useState(true);
  const [endereco, setEndereco] = useState({
    cep: "",
    estado: "",
    cidade: "",
    rua: "",
    bairro: "",
    numero: "",
  });

  const set = (atributo) => {
    return ({ target: { value } }) => {
      setAssociado((valoresAntigos) => ({ ...valoresAntigos, [atributo]: value }));
    };
  };

  const salvarAssociado = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      try {
        setSalvando(true);
        const data = {
          ...associado,
          senha: md5(associado.senha),
          cep: endereco.cep,
          estado: endereco.estado,
          cidade: endereco.cidade,
          rua: endereco.rua,
          bairro: endereco.bairro,
          numero: endereco.numero,
          receber_comunicado,
          tel_celular: tel_celular.numero,
          whatsapp: tel_celular.whatsapp,
          ativo: false
        };

        await ServicoAssociado.cadastrarAssociado(data);
        
        setToastVariant("success");
        setToastMessage("Registro realizado com sucesso! Você receberá um e-mail de confirmação quando seus dados forem validados pela administração.");
        setShowToast(true);

        limparState();
      } catch (error) {
        setToastVariant("danger");
        setToastMessage(`Falha ao se associar! ${error.message}`);
        setShowToast(true);
      } finally {
        setSalvando(false);
      }
    }
  };

  function limparState() {
    setValidated(false);
    setEndereco({
      cep: "",
      estado: "",
      cidade: "",
      rua: "",
      bairro: "",
      numero: "",
    });
    setReceberComunicado(true);
    setAssociado({
      nome: "",
      sobrenome: "",
      data_nascimento: null,
      rg: "",
      cpf: "",
      email: "",
      tel_residencial: "",
      tel_comercial: "",
      receber_comunicado: true,
      email_alternativo: "",
      modalidade: "aeromodelismo",
      perfil: "ASSOCIADO",
      senha: "",
      tel_celular: "",
    });
    setCelular({ numero: "", whatsapp: false });
  }

  function mostrarAlerta(tipo, mensagem) {
    setTimeout(() => {
      setMensagem(mensagem);
      setTipoAlerta(tipo);
    }, 100);
    setAlerta(true);
  }

  useEffect(() => {
    async function findAddress(unmaskedCEP) {
      try {
        const response = await fetch('https://api.brasilaberto.com/v1/zipcode/87920000');
        const apiOnline = response.ok;
        setApiOnline(apiOnline);

        setBuscando(true);
        const address = await buscaCEP(unmaskedCEP);

        setEndereco({
          ...endereco,
          estado: address.result.state,
          cidade: address.result.city,
          bairro: address.result.district,
          rua: address.result.street,
        });

        setTimeout(() => {
          numberRef.current?.focus();
        }, 120);
      } catch (error) {
        mostrarAlerta("error", "CEP inválido!");
        setApiOnline(false);
        if (apiOnline){
          setEndereco({
            cep: "",
            estado: "",
            cidade: "",
            bairro: "",
            rua: "",
            numero: "",
          });
        }
      } finally {
        setBuscando(false);
      }
    }
    const cep = removeMask(endereco.cep);

    if (cep?.length !== 8) {
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

    findAddress(cep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endereco.cep]);

  return (
    <Container className="mt-5 pt-5 ">
     <Card className="px-3 my-5">
        <ModalAssociar></ModalAssociar>
        <Row className="justify-content-center">
          <h1 className="my-3">Associe-se</h1>
        </Row>
        <Row className="justify-content-center px-1">
          <CustomToast show={showToast} onClose={handleToastClose} variant={toastVariant} message={toastMessage} />
          <Form
            className="formulario-cadastro"
            noValidate
            validated={validated}
            onSubmit={salvarAssociado}
          >
            <Form.Row>
              <h3 className="margin-left-5 py-3">
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
                checked={associado.modalidade === "aeromodelismo"}
                label="Aeromodelismo"
                value="aeromodelismo"
                onChange={set("modalidade")}
              />
              <Form.Check
                className="tamanho-texto mt-2 mx-4"
                type="radio"
                checked={associado.modalidade === "automodelismo"}
                name="modalidade"
                label="Automodelismo"
                value="automodelismo"
                onChange={set("modalidade")}
              />
            </Form.Row>
            <Form.Row>
              <h3 className="margin-left-5 py-3">
                <FontAwesomeIcon color="blue" icon={faUser} size="1x" className="mr-2" />
                Dados do usuário
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="nome">
                <Form.Control
                  placeholder="Nome *"
                  size="lg"
                  required
                  value={associado.nome}
                  onChange={set("nome")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo nome é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="sobrenome">
                <Form.Control
                  placeholder="Sobrenome *"
                  size="lg"
                  required
                  value={associado.sobrenome}
                  onChange={set("sobrenome")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo sobrenome é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="dataNasc">
                <Form.Control
                  type="date"
                  placeholder="Data de Nascimento *"
                  size="lg"
                  required
                  value={associado.data_nascimento}
                  onChange={set("data_nascimento")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo data de nascimento é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-6" controlId="" as={Col}>
                <MaskedFormControl
                  placeholder="CPF *"
                  size="lg"
                  mask="111.111.111-11"
                  required
                  maskChar={null}
                  value={associado.cpf}
                  onChange={set("cpf")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo CPF é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="rg">
                <Form.Control
                  placeholder="RG *"
                  size="lg"
                  required
                  value={associado.rg}
                  onChange={set("rg")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo RG é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            
            
            <Form.Row>
              
              <h3 className="margin-left-5 py-3">
                <FontAwesomeIcon color="blue" icon={faPhoneAlt} size="1x" className="mr-2" />
                Contato
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="telcel">
                <MaskedFormControl
                  mask="(11) 1 1111-1111"
                  placeholder="Telefone Celular *"
                  value={tel_celular.numero}
                  size="lg"
                  required
                  onChange={(event) => setCelular({ ...tel_celular, numero: event.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  O campo telefone celular é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-6" controlId="whatsapp" as={Col}>
                <Form.Check
                  className="tamanho-texto ml-3 mt-2"
                  type="switch"
                  checked={tel_celular.whatsapp}
                  label="Celular com WhatsApp?"
                  onChange={() => setCelular({ ...tel_celular, whatsapp: !tel_celular.whatsapp })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="telresi">
                <MaskedFormControl
                  mask="(11) 1111-1111"
                  placeholder="Telefone Residencial"
                  size="lg"
                  value={associado.tel_residencial}
                  onChange={set("tel_residencial")}
                />
              </Form.Group>
              <Form.Group className="col-12 col-md-6" controlId="telcom" as={Col}>
                <MaskedFormControl
                  mask="(11) 1111-1111"
                  placeholder="Telefone Comercial"
                  size="lg"
                  value={associado.tel_comercial}
                  onChange={set("tel_comercial")}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="email">
                <Form.Control
                  placeholder="E-mail *"
                  type="email"
                  size="lg"
                  required
                  value={associado.email}
                  onChange={set("email")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo e-mail é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-6" controlId="emailalter" as={Col}>
                <Form.Control
                  placeholder="E-mal alternativo"
                  type="email"
                  size="lg"
                  value={associado.email_alternativo}
                  onChange={set("email_alternativo")}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="senha">
                <Form.Control
                  placeholder="Senha*"
                  type="password"
                  size="lg"
                  required
                  value={associado.senha}
                  onChange={set("senha")}
                />
                <Form.Control.Feedback type="invalid">
                  O campo senha é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <h3 className="margin-left-5 py-3">
                <FontAwesomeIcon color="blue" icon={faHome} size="1x" className="mr-2" />
                Endereço
              </h3>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-4" controlId="cep" as={Col}>
                <MaskedFormControl
                  placeholder="CEP *"
                  value={endereco.cep}
                  disabled={buscando}
                  size="lg"
                  mask="11111-111"
                  required
                  onChange={(event) => setEndereco({ ...endereco, cep: event.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  O campo CEP é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-8" as={Col} controlId="rua">
                <Form.Control
                  placeholder="Logradouro *"
                  value={endereco.rua}
                  required
                  disabled={buscando || removeMask(endereco.cep).length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, rua: event.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  O campo logradouro é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-4" controlId="numero" as={Col}>
                <Form.Control
                  placeholder="Número *"
                  value={endereco.numero}
                  required
                  disabled={buscando || removeMask(endereco.cep).length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, numero: event.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  O campo número é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-8" as={Col} controlId="bairro">
                <Form.Control
                  placeholder="Bairro *"
                  value={endereco.bairro}
                  required
                  disabled={buscando || removeMask(endereco.cep).length !== 8}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, bairro: event.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  O campo bairro é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-12 col-md-6" as={Col} controlId="estado">
                <Form.Control
                  placeholder="Estado *"
                  value={endereco.estado}
                  required
                  disabled={buscando || apiOnline}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, estado: event.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  O campo estado é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12 col-md-6" controlId="cidade" as={Col}>
                <Form.Control
                  placeholder="Cidade *"
                  value={endereco.cidade}
                  disabled={buscando || apiOnline}
                  size="lg"
                  onChange={(event) => setEndereco({ ...endereco, cidade: event.target.value })}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  O campo cidade é obrigatório!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Check
                className="tamanho-texto my-3 ml-2"
                type="checkbox"
                size="lg"
                label="Aceito receber comunicados oficiais oriundos da diretoria."
                checked={receber_comunicado}
                onChange={() => setReceberComunicado(!receber_comunicado)}
              />
              <Form.Control.Feedback type="invalid">
                O campo RG é obrigatório!
              </Form.Control.Feedback>
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
