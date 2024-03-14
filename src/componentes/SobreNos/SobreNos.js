import "./estilo.css";
import { apiHost } from "./../../configuracao.json";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class SobreNos extends Component {
  render() {
    const { principal, logo } = this.props;
    return (
      <Container className="text-white h-100">
        <Row className="h-100 align-items-center">
          <Col className="px-lg-5 d-flex flex-column justify-content-center shadow-lg">
            <h1 className="text-left">{principal.titulo}</h1>
            <p className="mb-3 lead">{principal.subtitulo}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SobreNos;
