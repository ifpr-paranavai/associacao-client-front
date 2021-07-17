import "./estilo.css";
import logo from "./../../assets/logo-amaer.png";
import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { baseRoute, adminHost } from "./../../configuracao.json";

class BarraNavegacao extends Component {
  render() {
    return (
      <Navbar className="py-4" expand="lg" bg="dark" variant="dark" fixed="top" id="menuopcoes">
        <Container>
          <Navbar.Brand href={baseRoute + "/"}>
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href={baseRoute + "/eventos"}>EVENTOS</Nav.Link>
              <Nav.Link href={baseRoute + "/fotosvideos"}>FOTOS E VÍDEOS</Nav.Link>
              <Nav.Link href={baseRoute + "/classificados"}>CLASSIFICADOS</Nav.Link>
              <Nav.Link href={baseRoute + "/#contato"}>CONTATO</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href={baseRoute + "/associar"} className="ml-md-2 btn btn-outline-light">
                Associe-se
              </Nav.Link>
              <Nav.Link href={adminHost} className="ml-md-2 mt-md-2 mt-lg-0 btn btn-outline-light">
                Área de Associado
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default BarraNavegacao;
