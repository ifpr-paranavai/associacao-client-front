import "./estilo.css";
import logo from "./../../assets/logo-amaer.png";
import React, { Component } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { baseRoute, adminHost } from "./../../configuracao.json";

class Rodape extends Component {
  render() {
    return (
      <div className="border-dark bg-dark text-light rodape-fundo-preto" id="rodape">
        <Container className="p-4">
          <Row>
            <Col xs={12} md={4}>
              <Image className="mx-auto d-block" src={logo} height="50" />
              <p className="text-center pt-4 px-4">
                Associação Maringaense de Aeromodelismo e Automodelismo.
              </p>
            </Col>
            <Col xs={12} md={4} className="text-sm-center text-md-left">
              <p className="titulo-rodape">Menu</p>
              <ul className="list-unstyled text-light">
                <li className="pt-2">
                  <a href={baseRoute + "/"} className="text-light">
                    INÍCIO
                  </a>
                </li>
                <li className="pt-2">
                  <a href={baseRoute + "/eventos"} className="text-light">
                    EVENTOS
                  </a>
                </li>
                <li className="pt-2">
                  <a href={baseRoute + "/fotosvideos"} className="text-light">
                    FOTOS E VÍDEOS
                  </a>
                </li>
                <li className="pt-2">
                  <a href={baseRoute + "/classificados"} className="text-light">
                    CLASSIFICADOS
                  </a>
                </li>
                <li className="pt-2">
                  <a href={baseRoute + "/#contato"} className="text-light">
                    CONTATO
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={4} className="text-sm-center text-md-left">
              <p className="titulo-rodape">Contato</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" className="mr-2" />
                faleconosco.amaer@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} color="white" size="lg" className="mr-2" />
                Maringá | PR
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  color="white"
                  size="lg"
                  className="mr-2"
                />
                <a className="cor-link" href="https://www.instagram.com/amaermga/">
                  @amaer
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faFacebookSquare} color="white" size="lg" className="mr-2" />
                <a className="cor-link" href="https://www.facebook.com/amaermaringa/">
                  @facebook
                </a>
              </p>
              <a className="btn btn-outline-light text-center" href={baseRoute + "/#menuopcoes"}>
                Acima
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Rodape;
