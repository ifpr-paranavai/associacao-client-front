
import './estilo.css';
import React, { Component } from 'react';
//import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';


class BarraNavegacao extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <nav class="navbar navbar-expand-lg navbar-dark py-2 bg-dark"  id="menuopcoes">
      <div class="container"> 
        <a class="navbar-brand" href="#">
          <img src="icones/amaer.jpeg" class="d-inline-block align-top" alt="" height="30"/> 
        </a> 
        <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar17">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar17">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item my-3 text-light flex-grow-0"> <a class="nav-link" href="index.html">INÍCIO</a> </li>
          <li class="nav-item py-3 mx-auto"> <a class="nav-link" href="index.html#sobrenos">SOBRE NÓS</a> </li>
          <li class="nav-item py-3 mx-2"> <a class="nav-link" href="evento.html">EVENTOS</a> </li>
          <li class="nav-item py-3 mx-1"> <a class="nav-link" href="fotosevideos.html">&nbsp;FOTOS E VÍDEOS</a> </li>
          <li class="nav-item py-3 mx-1"> <a class="nav-link" href="produtos.html">CLASSIFICADOS</a> </li>
          <li class="nav-item py-3 mx-1" > <a class="nav-link" href="index.html#contato">CONTATO<br/></a> </li>
        </ul>
        <a class="btn navbar-btn ml-md-2 btn-outline-light" href="login.html">Log in</a><a class="btn btn-outline-light navbar-btn ml-md-2" href="cadastro.html">Associe-se</a>
      </div>
    </div>
    </nav>
    )

  }
}

export default BarraNavegacao;
