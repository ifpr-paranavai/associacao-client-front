
import './estilo.css';
import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './../../assets/logo.jpeg';


class BarraNavegacao extends Component{
  constructor(props){
    super(props);
  }
     

  render(){
    return (
        <Navbar  className = "nav-texto-branco" expand = "lg">
          <Container> 
            <Navbar.Brand href="#home">
              <img
                src= {logo}
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">INÍCIO</Nav.Link>
                <Nav.Link href="#link">SOBRE NÓS</Nav.Link>
                <Nav.Link href="#link">EVENTOS</Nav.Link>
                <Nav.Link href="#link">FOTOS E VÍDEOS</Nav.Link>
                <Nav.Link href="#link">CLASSIFICADOS</Nav.Link>
                <Nav.Link href="#link">CONTATO</Nav.Link>
               </Nav>
               <Nav>
                <Nav.Link href="#link" className="ml-md-2 btn btn-outline-light">Associe-se</Nav.Link>
                <Nav.Link href="#link" className="ml-md-2 mt-md-2 mt-lg-0 btn btn-outline-light">Área de Associado</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )

  }
}

export default BarraNavegacao;
