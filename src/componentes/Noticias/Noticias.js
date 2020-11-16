
import './estilo.css';
import logo from './../../assets/logo-amaer.png'
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
              <h1 className="mb-3 mt-3 text-dark" ><b>Notícias&nbsp;</b></h1>
            </div>
          </div>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="./src/assets/aeromodelismo.jpg" />
              <Card.Body>
                <Card.Title>Notícia 1</Card.Title>
                <Card.Text>
                  Este evento ocorreu no dia 16/11/2020, com duração de 5h. Participou como palestrante do evento
                  João Martins.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Notícia 2</Card.Title>
                <Card.Text>
                  Este evento ocorreu no dia 16/11/2020, com duração de 5h. Participou como palestrante do evento
                  João Martins.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
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
