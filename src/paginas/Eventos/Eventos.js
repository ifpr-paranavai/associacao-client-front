import './estilo.css';
import React, { Component, Card, Row, Button, CardDeck, Container} from 'react';
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
      <Container>
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Eventos</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            eventos.map(evento => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-eventos">
                  <Card.Img variant="top" 
                    src= {evento.src}
                    alt={evento.alt}
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
