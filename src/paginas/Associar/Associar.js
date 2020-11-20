import './estilo.css';
import React, { Component} from 'react';
import AssociarService from '../../service/AssociarService'
import { Form, Container, Row, Col, Button} from 'react-bootstrap';

class Associar extends Component{
  async handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target)
    const resposta = await AssociarService.postarDadosDoFormulario(data)
    alert(resposta)
  }
  render(){
    return (
      <Container className="mt-5 pt-5">
          <Row className="justify-content-center mb-5"> 
            <h1 className="my-3">
              Associe-se
            </h1>
          </Row>
          <Form className = "pb-5 formulario-contato" onSubmit={this.handleSubmit}>
            <Row >
              <Col>
                <Form.Control  className="mb-5" placeholder="Nome" id="nome" name="nome" size="lg"  />
                <Form.Control className="mb-5"  placeholder="CPF" id="cpf" name="cpf" size="lg" />
                <Form.Control className="mb-5"  placeholder="RG" id="rg" name="rg" size="lg" />
                <Button block size="lg" variant="primary" type="submit" >
                    Enviar
                </Button>
              </Col>
            </Row>

          </Form>
          
      </Container>         
    )
  }
}

export default Associar;
