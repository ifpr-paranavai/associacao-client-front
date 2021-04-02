
import './estilo.css';
import ContatoService from '../../service/ContatoService';
import * as FaIcons from 'react-icons/fa';
import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

function Contato () {
  const [values, setValues] = useState({
    nome: '', email: '', assunto: '', mensagem: '' 
  });

  const [validated, setValidated] = useState(false);

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };

  const enviarMensagem = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        await ContatoService.enviarMensagem(values);
        alert('Mensagem enviada com sucesso!');
        setValues({
          nome: '', email: '', assunto: '', mensagem: ''
        });
      } catch (e) {
        alert(`Falha ao enviar sua mensagem! ${e.message}`);
      }
    }
    setValidated(true);
  }
  return (
    <Container>
        <Row className="justify-content-center mb-5"> 
          <h1 className="my-3">
            Contato
          </h1>
        </Row>
        <Form className = "p-5 mb-4 mx-5 formulario-contato" noValidate validated={validated} onSubmit={enviarMensagem}>
        <Row>
          <Col xs={12}  md={6}>
            <Form.Group controlId="nomeC">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                placeholder="Nome"
                size="lg"
                value={values.nome}
                onChange={set('nome')}
              />
              <Form.Control.Feedback type="invalid">
                O campo nome é obrigatório!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="emailC">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                placeholder="E-mail"
                type="email"
                size="lg"
                value={values.email}
                onChange={set('email')}
              />
              <Form.Control.Feedback type="invalid">
                O campo e-mail é obrigatório!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="assuntoC">
              <Form.Label>Assunto</Form.Label>
              <Form.Control
                required
                size="lg"
                placeholder="Assunto"
                value={values.assunto}
                onChange={set('assunto')}
              />
              <Form.Control.Feedback type="invalid">
                O campo assunto é obrigatório!
              </Form.Control.Feedback>
            </Form.Group>
            
          </Col>
          <Col className="text-center" xs={12} md={6}>
            <Form.Group controlId="emailC" className="text-left">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control required as="textarea" rows={4} placeholder="Sua mensagem" size="lg" value={values.mensagem} onChange={set('mensagem')} />
              <Form.Control.Feedback type="invalid">
                O campo mensagem é obrigatório!
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="px-5 mt-3 cor-botao"
              size="lg"
              variant="secondary"
              type="submit"
            >
              Enviar <FaIcons.FaRegPaperPlane className="ml-3"/>
            </Button>
          </Col>
        </Row>

        </Form>
        
    </Container>         
  )
}

export default Contato;

