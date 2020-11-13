
import './estilo.css';
import logo from './../../assets/logo-amaer.png'
import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'

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
              <li>
                <a href="index.html" class="text-light">INÍCIO</a>
              </li> 
              <li>
                <a href="index.html#sobrenos" class="text-light">SOBRE NÓS</a>
              </li> 
              <li>
                <a href="evento.html" class="text-light">EVENTOS</a>
              </li> 
              <li>
                <a href="fotosevideos.html" class="text-light">FOTOS E VÍDEOS</a>
              </li> 
              <li>
                <a href="produtos.html" class="text-light">CLASSIFICADOS</a>
              </li> 
              <li>
                <a href="index.html#contato" class="text-light">CONTATO</a> 
              </li>
            </ul>
              
            </Col>
           
            <Col>
              <p className = "titulo-rodape">Contato</p>
              <p>
              <a href="#contato" class="text-light">
                <i class="fa d-inline mr-3 text-muted fa-envelope-o" />
                associacao@gmail.com
              </a>
            </p>
            <p class="bg-dark text-light">
              <a href="#maringa" class="text-dark">
                <i class="fa d-inline mr-3 fa-map-marker text-muted" />
                Maringá | PR
              </a>
            </p>
            <p>
              <i class="fa fa-1x fa-camera-retro">&nbsp; &nbsp; &nbsp; @amaer</i>
            </p>
            <p>
              <FontAwesomeIcon icon={faFacebookF} color="white" />
              <i class="fa fa-facebook-official">&nbsp; &nbsp; &nbsp;@facebook</i>
            </p>
            <a class="btn btn-outline-light text-center" href="index.html#menuopcoes" >Acima</a>
            </Col>
          </Row>
        </Container>

      </div>

      )
  }
}

export default Rodape;
