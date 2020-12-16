
import './estilo.css';
import React, { Component } from 'react';
import HomeService from './../../service/HomeService'
import { Container, Row, Col} from 'react-bootstrap';


// import {Navbar, Nav, Container} from 'react-bootstrap';


class SobreNos extends Component{
    constructor (props){
        super(props);
        this.state = {
            sobre: []
        }
      }
      async componentDidMount() {
          let sobre = await HomeService.obterSobre();
          this.setState({ sobre })
      }
      render(){
        const {sobre} = this.state
        return (
            <Container className="text-white h-100">
                <Row className="h-100 align-items-center">
                    <Col className="px-lg-5 d-flex flex-column justify-content-center shadow-lg">
                        <h1 className="text-center">A Amaer</h1>
                        <p className="mb-3 lead">{sobre.texto}</p>
                    </Col>
                    <Col> 
                        <img className="img-fluid d-block " 
                        src={sobre.src}
                        alt={sobre.alt}/> 
                    </Col>
                </Row>
            </Container>
                    
        )
  }
}

export default SobreNos;
