
import './estilo.css';
import HomeService from '../../service/HomeService'
import React, { Component } from 'react';
import { Form, Container, Row, FormControl, Col, Button } from 'react-bootstrap';


// import {Navbar, Nav, Container} from 'react-bootstrap';


class Contato extends Component{
 
    render(){
    
        return (
          <Container>
              <Row className="justify-content-center mb-5"> 
                <h1 className="my-3">
                  Contato
                </h1>
              </Row>
              <Form className = "p-5 formulario-contato">
                <Row >
                  <Col>
                    <Form.Control  className="mb-5" placeholder="Nome" size="lg"  />
                    <Form.Control className="mb-5"  placeholder="E-mail" size="lg" />
                    <Form.Control className="mb-5"  placeholder="Assunto" size="lg" />
                  </Col>
                  <Col className="text-center">
                    <Form.Control className="mb-4" as="textarea" rows={4} placeholder="Sua mensagem" size="lg" />
                    <Button className="mx-auto cor-botao" size="lg" variant="secondary" type="submit" >
                        Enviar
                    </Button>
                  </Col>
                </Row>

              </Form>
              
          </Container>         
    )
  }
}

export default Contato;

