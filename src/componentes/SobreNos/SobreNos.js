import "./estilo.css";
import { apiHost } from "./../../configuracao.json";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class SobreNos extends Component {
  constructor(props) {
    super(props);
    console.log(props.dados);
    console.log(props.logo);
    this.state = {
      dados: {
        titulo: props.dados.titulo,
        subtitulo: props.dados.subtitulo,
      },
      logo: {
        titulo: props.logo.src,
        subtitulo: props.logo.alt,
      },
    };
  }
  render() {
    const { dados, logo } = this.state;
    return (
      <Container className="text-white h-100">
        <Row className="h-100 align-items-center">
          <Col className="px-lg-5 d-flex flex-column justify-content-center shadow-lg">
            <h1 className="text-center">{dados.titulo}</h1>
            <p className="mb-3 lead">{dados.subtitulo}</p>
          </Col>
          <Col>
            <img
              className="img-fluid d-block "
              src={apiHost + "/imagem/" + logo.src}
              alt={logo.alt}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SobreNos;
