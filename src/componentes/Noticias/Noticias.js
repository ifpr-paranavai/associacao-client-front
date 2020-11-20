
import './estilo.css';
import HomeService from './../../service/HomeService'
import React, { Component } from 'react';
import { Container, Card, CardDeck, Row, Button} from 'react-bootstrap';


// import {Navbar, Nav, Container} from 'react-bootstrap';


class Noticias extends Component{
  constructor (props){
    super(props);
    this.state = {
        noticias: []
    }
  }
  async componentDidMount() {
      let noticias = await HomeService.obterNoticias();
      this.setState({ noticias })
  }
  render(){
    const {noticias} = this.state
    let noticias2 = this.state.noticias;
    return (
      
        <Container>
          <Row className="justify-content-center">
            <h1 className="mb-3 mt-3 text-dark text-xs-center">Notícias</h1>
          </Row>
          <CardDeck className="mb-3">
            {
              noticias.map(noticia => {
                return (
                  <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-noticias">
                    <Card.Img variant="top" 
                      src= {noticia.src}
                    />
                    <Card.Body>
                      <Card.Title>{noticia.titulo} </Card.Title>
                      <Card.Text>{noticia.chamada} </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              )
            }
          </CardDeck>
          <Row className="justify-content-end">
            <Button href="/noticias" variant="secondary" size="lg">+ Notícias</Button>
          </Row>
        </Container>      
    )
  }
}

export default Noticias;
