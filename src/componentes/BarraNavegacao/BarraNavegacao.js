
import './estilo.css';
import logo from './../../assets/logo-amaer.png'
import React, { Component } from 'react';


class BarraNavegacao extends Component{

  render(){
    return <nav className="navbar navbar-expand-lg navbar-dark py-2 bg-dark nav-estilo" id="menuopcoes">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="d-inline-block align-top" alt="" height="50" />
        </a>
        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar17">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar17">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item my-3 text-light flex-grow-0" > <a className="nav-link" href="index.html">INÍCIO</a> </li>
            <li className="nav-item py-3 mx-auto"> <a className="nav-link" href="index.html#sobrenos">SOBRE NÓS</a> </li>
            <li className="nav-item py-3 mx-2"> <a className="nav-link" href="evento.html">EVENTOS</a> </li>
            <li className="nav-item py-3 mx-1"> <a className="nav-link" href="fotosevideos.html">&nbsp;FOTOS E VÍDEOS</a> </li>
            <li className="nav-item py-3 mx-1"> <a className="nav-link" href="produtos.html">CLASSIFICADOS</a> </li>
            <li className="nav-item py-3 mx-1" > <a className="nav-link" href="index.html#contato">CONTATO<br /></a> </li>
          </ul>
          <a className="btn navbar-btn ml-md-2 btn-outline-light" href="login.html">Log in</a><a className="btn btn-outline-light navbar-btn ml-md-2" href="cadastro.html">Associe-se</a>
        </div>
      </div>
    </nav>
  }
}

export default BarraNavegacao;
