import './estilo.css';
import React, { Component} from 'react';
import {Card, Row, Button, CardDeck, Container} from 'react-bootstrap';
import EventoService from './../../service/EventoService'
// import Eventos from './../../componentes/Eventos/Eventos';



class Eventos extends Component{
  constructor (props){
    super(props);
    this.state = {
        eventos: []
    }
  }
  async componentDidMount() {
      let eventos = await EventoService.obterEventos();
      this.setState({ eventos })
  }
   render(){
   
    const {eventos} = this.state
    // let eventos2 = this.state.eventos;
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Eventos</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            eventos.map(evento => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-eventos" key={evento.id}>
                  <Card.Img variant="top" 
                    src= {evento.imagem.src }
                    alt={evento.imagem.alt}
                  />
                  <Card.Body>
                    <Card.Title>{evento.titulo} </Card.Title>
                    <Card.Text>{evento.descricao} </Card.Text>
                    <Card.Link>{evento.link}</Card.Link>
                  </Card.Body>
                </Card>
              )}
            )
          }
        </CardDeck>
        <Row className="justify-content-end">
          <Button href="/eventos" variant="secondary" size="lg">+ Eventos</Button>
        </Row>
      </Container>   
    )

  }
}

export default Eventos;
