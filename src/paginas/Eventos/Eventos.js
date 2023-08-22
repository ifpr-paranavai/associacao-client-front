import "./estilo.css";
import React, { Component } from "react";
import { Card, Row, Button, CardDeck, Container, Col } from "react-bootstrap";
import EventoService from "./../../service/EventoService";
import { formatarData } from "../../uteis/formatarData";
// import Eventos from './../../componentes/Eventos/Eventos';

class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventos: [],
    };
  }
  async componentDidMount() {
    let eventos = await EventoService.obterEventos();
    this.setState({ eventos });
  }
  render() {
    const { eventos } = this.state;
    // let eventos2 = this.state.eventos;
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Eventos</h1>
        </Row>
        <Row>
          {eventos.map((evento) => {
            return (
              <Col xs={12} sm={6} md={4} key={evento.id}>
                <Card
                  className="p-4 my-3 mx-10 borda-cards-eventos"
                  style={{ maxHeight: "500px" }}
                >
                  <Card.Img
                    variant="top"
                    src={evento.url}
                    alt={evento.imagem ? evento.imagem.alt : "descricao_padrao"}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{evento.titulo} </Card.Title>
                    <Card.Text>{evento.descricao} </Card.Text>
                    <Card.Text>Local: {evento.local}</Card.Text>
                    <Card.Text>
                      Data:{" "}
                      {`${formatarData(evento.data_inicio)} a ${formatarData(
                        evento.data_fim
                      )}`}
                    </Card.Text>
                    <Card.Link>{evento.link}</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="justify-content-end">
          <Button href="/eventos" variant="secondary" size="lg">
            + Eventos
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Eventos;
