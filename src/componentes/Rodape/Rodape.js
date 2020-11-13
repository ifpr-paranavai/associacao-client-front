
import './estilo.css';
import logo from './../../assets/logo-amaer.png'
import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'

// import {Navbar, Nav, Container} from 'react-bootstrap';


class Rodape extends Component{
  render(){
    return (
      <div className="border-dark bg-dark text-light rodape-fundo-preto" id="rodape">
        <Container className = "p-4"> 
          <Row>
            <Col>
                <Image className = "mx-auto d-block" src = {logo} height = "50"/>                   
                <p className = "text-center pt-4 px-4">Associação Maringaense de Aeromodelismo e Automodelismo.</p>
            </Col>
            <Col>
              <p className = "titulo-rodape">Menu</p>
              <ul class="list-unstyled text-light"> 
              <li className = "pt-2">
                <a href="/" className="text-light">INÍCIO</a>
              </li> 
              <li className = "pt-2">
                <a href="/#sobrenos" className="text-light">SOBRE NÓS</a>
              </li> 
              <li className = "pt-2">
                <a href="/eventos" className="text-light">EVENTOS</a>
              </li> 
              <li className = "pt-2">
                <a href="/fotosevideos" className="text-light">FOTOS E VÍDEOS</a>
              </li> 
              <li className = "pt-2">
                <a href="/classificados" className = "text-light">CLASSIFICADOS</a>
              </li> 
              <li className = "pt-2">
                <a href="/#contato" className="text-light">CONTATO</a> 
              </li>
            </ul>
              
            </Col>
           
            <Col>
              <p className = "titulo-rodape">Contato</p>
              <p><FontAwesomeIcon icon={faEnvelope} color="white" size="lg" className="mr-2"/>assoacao@gmail.com</p>           
              <p><FontAwesomeIcon icon={faMapMarker} color="white" size="lg" className="mr-2"/>Maringá | PR</p>
              <p><FontAwesomeIcon icon={faInstagramSquare} color="white" size="lg" className="mr-2"/>@amaer</p>
              <p><FontAwesomeIcon icon={faFacebookSquare} color="white" size="lg" className="mr-2"/>@facebook</p>
              <a class="btn btn-outline-light text-center" href="/#menuopcoes" >Acima</a>
            </Col>
          </Row>
        </Container>

      </div>

      )
  }
}

export default Rodape;
