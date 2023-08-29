import './estilo.css';
import React, { Component} from 'react';
import {Card, Row, Button, CardDeck, Container} from 'react-bootstrap';
import AtaService from './../../service/AtasService'
// import Atas from './../../componentes/Atas/Atas';



class Atas extends Component{
  constructor (props){
    super(props);
    this.state = {
        atas: []
    }
  }
  async componentDidMount() {
      let atas = await AtaService.obterAtas();
      this.setState({ atas })
  }
   render(){
   
    const {atas} = this.state
    // let atas2 = this.state.atas;
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Atas</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            atas.map(ata => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-atas" key={ata.id}>
                  <Card.Body>
                    <Card.Title>{ata.titulo} </Card.Title>
                    <Card.Title>{ata.descricao} </Card.Title>
                  </Card.Body>
                </Card>
              )}
            )
          }
        </CardDeck>
        <Row className="justify-content-end">
          <Button href="/atas" variant="secondary" size="lg">+ Atas</Button>
        </Row>
      </Container>   
    )

  }
}

export default Atas;
