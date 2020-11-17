
import './estilo.css';
import aeromodelismo from './../../assets/aeromodelismo.jpg'
import automodelismo from './../../assets/automodelismo.jpg'
import palestra from './../../assets/palestra.jpg'

import React, { Component } from 'react';
import { Container, Card, CardDeck, CardFooter, CardImg, CardTitle, CardText, CardBody,  } from 'react-bootstrap';


// import {Navbar, Nav, Container} from 'react-bootstrap';


class Noticias extends Component{
  render(){
    return (
      <div className="py-5 text-center"  id="idnoticias idnoticias">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-12">
              <h1 className="mb-3 mt-3 text-dark">
                <b>Notícias&nbsp;</b>
              </h1>
            </div>
          </div>
          <CardDeck > 
            <Card className = "col-6 col-lg-3 p-4 my-3 mx-4 borda-cards-noticias"> 
              <Card.Img variant="top" 
                src= {aeromodelismo} 
                height="50%"
                />
              <Card.Body>
                <Card.Title>Notícia 1</Card.Title>
                <Card.Text>
                  Este evento ocorreu no dia 16/11/2020, com duração de 5h. Participou como palestrante do evento
                  João Martins.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className = "col-6 col-lg-3 p-4 my-3 mx-4 borda-cards-noticias">
              <Card.Img variant="top" 
                src= {automodelismo} 
                height= "50%"
                />
              <Card.Body>
                <Card.Title>Notícia 2</Card.Title>
                <Card.Text>
                  Este evento ocorreu no dia 16/11/2020, com duração de 5h. Participou como palestrante do evento
                  João Martins.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className = "col-6 col-lg-3 p-4 my-3 mx-4 borda-cards-noticias">
              <Card.Img 
                variant="top" 
                src= {palestra} 
                height="50%"
                />
              <Card.Body>
                <Card.Title>Notícia 3</Card.Title>
                <Card.Text>
                  Este evento ocorreu no dia 16/11/2020, com duração de 5h. Participou como palestrante do evento
                  João Martins.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
      
    )
  }
}

export default Noticias;
