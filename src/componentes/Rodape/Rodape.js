
import './estilo.css';
// import logo from './../../assets/logo-amaer.png'
import React, { Component } from 'react';
// import {Navbar, Nav, Container} from 'react-bootstrap';


class Rodape extends Component{
  render(){
    return (
      <div class="border-dark bg-dark text-light">
        <div class="container">
          <div class="row">
            <div class="p-4 col-md-4">
              <img class="img-fluid d-block w-75" src="icones/logo amaer.jpeg" />
              <br />
              <p>Associação Maringaense de Aeromodelismo e Automodelismo.</p>
            </div>
            <div class="p-4 col-md-4">
              <h2 class="mb-4">Menu</h2>
              <ul class="list-unstyled text-light"> 
                <li>
                  <a href="index.html" class="text-light">INÍCIO</a>
                </li> <br />
                <li>
                  <a href="index.html#sobrenos" class="text-light">SOBRE NÓS</a>
                </li> <br />
                <li>
                  <a href="evento.html" class="text-light">EVENTOS</a>
                </li> <br />
                <li>
                  <a href="fotosevideos.html" class="text-light">FOTOS E VÍDEOS</a>
                </li> <br />
                <li>
                  <a href="produtos.html" class="text-light">CLASSIFICADOS</a>
                </li> <br />
                <li>
                <a href="index.html#contato" class="text-light">CONTATO</a> 
                </li>
              </ul>
            </div>
            <div class="p-4 col-md-4">
              <h2 class="mb-4">Contato</h2>
              <p>
                <a href="#" class="text-light">
                  <i class="fa d-inline mr-3 text-muted fa-envelope-o" />
                  associacao@gmail.com
                </a>
              </p>
              <p class="bg-dark text-light">
                <a href="#" class="text-dark">
                  <i class="fa d-inline mr-3 fa-map-marker text-muted" />
                  Maringá | PR
                </a>
              </p>
              <p>
                <i class="fa fa-1x fa-camera-retro">&nbsp; &nbsp; &nbsp; @amaer</i>
              </p>
              <p>
                <i class="fa fa-facebook-official">&nbsp; &nbsp; &nbsp;@facebook</i>
              </p>
              <a class="btn btn-outline-light text-center" href="index.html#menuopcoes" >Acima</a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Rodape;
