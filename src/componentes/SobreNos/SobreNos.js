import "./estilo.css";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class SobreNos extends Component {
  render() {
    const { principal } = this.props;
    return (
      <Container className="h-100">
        <Row className="h-100 align-items-left">
          <Col className="px-lg-5 d-flex flex-column justify-content-center shadow-lg">
            <h1 className="title-about-us text-center">{principal.titulo}</h1>
            <p className="mb-5 text-about-us lead text-center">{principal.subtitulo}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SobreNos;
