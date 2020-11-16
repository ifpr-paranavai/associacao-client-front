
import './estilo.css';
import logo from './../../assets/logo-amaer.png'
import React, { Component } from 'react';
import { Container, Card, CardDeck, CardFooter, CardImg, CardTitle, CardText, CardBody,  } from 'react-bootstrap';


// import {Navbar, Nav, Container} from 'react-bootstrap';


class SobreNos extends Component{
  render(){
    return (

        <div className="py-5" id="sobrenos">
            <div className="container">
                <div className="row">
                    <div className="px-lg-5 d-flex flex-column justify-content-center col-lg-6 shadow-lg">
                        <h1 className="text-center"><b>A Amaer&nbsp;</b></h1>
                        <p className="mb-3 lead">
                        Texto sobre a associação aeromodelismo.</p>
                    </div>
                    <div className="col-lg-6"> 
                        <img className="img-fluid d-block shadow-lg" 
                        src="https://static.pingendo.com/cover-moon.svg"/> 
                    </div>
                </div>
            </div>
        </div>
                
    )
  }
}

export default SobreNos;
