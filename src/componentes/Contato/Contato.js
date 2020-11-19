
import './estilo.css';
import HomeService from '../../service/HomeService'
import React, { Component } from 'react';
import { Form, Container, Row, FormControl, Col } from 'react-bootstrap';


// import {Navbar, Nav, Container} from 'react-bootstrap';


class Contato extends Component{
 
    render(){
    
        return (
          <Container>
              <Row>
                <h1 className="mb-3 mt-3 text-dark text-xs-center">
                  Contato
                </h1>
              </Row>
              <Form>
                <Row className = "my-3 ">
                  <Col > 
                    <Form.Control placeholder="Nome" size="lg"  />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Email" size="lg"  />
                  </Col>
                </Row>
                <Row className = "my-3">
                  <Col>
                      <Form.Control placeholder="Assunto" size="lg" />
                  </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" size="lg" />
                </Form.Group>

              </Form>
          </Container>         
    )
  }
}

export default Contato;

/*<div class="py-3 text-center" style="" id="contato">
    <div class="container">
      <div class="row shadow-lg" style="	box-shadow: 3px 3px   gray;">
        <div class="mx-auto p-4 col-lg-7">
          <h1 class="mb-4 text-dark" style=""><b>Contato</b></h1>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6"> <input type="text" class="form-control" id="form27" placeholder="Nome"> </div>
              <div class="form-group col-md-6"> <input type="email" class="form-control" id="form28" placeholder="Email"> </div>
            </div>
            <div class="form-group"> <input type="text" class="form-control" id="form29" placeholder="Ass
unto" style=""> </div>
            <div class="form-group"> <textarea class="form-control" id="form30" rows="3" placeholder="Sua mensagem"></textarea> </div>
          </form><button type="submit" class="btn w-25 btn-dark text-light" style="	background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8));	background-position: top left;	background-size: 100%;	background-repeat: repeat;">Enviar</button>
        </div>
      </div>
    </div>
</div> */
