
import './estilo.css';
import logo from './../../assets/logo-amaer.png'
import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


class BarraNavegacao extends Component{
  render(){
    return (
        <Navbar className="nav-texto-branco py-4" expand="lg" fixed="top" id = "menuopcoes">
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
                <Nav.Link href="/">INÍCIO</Nav.Link>
                <Nav.Link href="/#sobre">SOBRE NÓS</Nav.Link>
                <Nav.Link href="/eventos">EVENTOS</Nav.Link>
                <Nav.Link href="/fotosevideos">FOTOS E VÍDEOS</Nav.Link>
                <Nav.Link href="/classificados">CLASSIFICADOS</Nav.Link>
                <Nav.Link href="/#contato">CONTATO</Nav.Link>
               </Nav>
               <Nav>
                <Nav.Link href="/associar" className="ml-md-2 btn btn-outline-light">Associe-se</Nav.Link>
                <Nav.Link href="#link" className="ml-md-2 mt-md-2 mt-lg-0 btn btn-outline-light">Área de Associado</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )

  }
}

export default BarraNavegacao;
