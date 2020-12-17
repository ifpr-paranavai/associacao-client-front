import './estilo.css';
import React, { Component} from 'react';
import {Card, Row, Button, CardDeck, Container} from 'react-bootstrap';
import ClassificadosService from '../../service/ClassificadosService'
// import Eventos from './../../componentes/Eventos/Eventos';



class Classificados extends Component{
  constructor (props){
    super(props);
    this.state = {
        classificados: []
    }
  }
  async componentDidMount() {
      let classificados = await ClassificadosService.obterClassificados();
      this.setState({ classificados })
  }
   render(){
   
    const {classificados} = this.state
    // let eventos2 = this.state.eventos;
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Classificados</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            classificados.map(classificado => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-eventos" key={classificado.id}>
                  <Card.Img variant="top" 
                    src= {classificado.imagem.src }
                    alt={classificado.imagem.alt}
                  />
                  <Card.Body>
                    <Card.Title>{classificado.nome} </Card.Title>
                    <Card.Text>{classificado.descricao} </Card.Text>
                    <Card.Text>{classificado.preco}</Card.Text>
                    <Card.Text>{classificado.contato}</Card.Text>
                  </Card.Body>
                </Card>
              )}
            )
          }
        </CardDeck>
        <Row className="justify-content-end">
          <Button href="/classificados" variant="secondary" size="lg">+ Classificados</Button>
        </Row>
      </Container>   
    )

  }
}

export default Classificados;
