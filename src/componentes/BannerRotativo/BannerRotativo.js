
import './estilo.css';
import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import HomeService from './../../service/HomeService'



class BannerRotativo extends Component{
    constructor (props){
        super(props);
        this.state = {
            imagens: []
        }
    }
    async componentDidMount() {
        let imagens = await HomeService.obterImagensDoBanner();
        this.setState({ imagens })
    }
    render(){
        const {imagens} = this.state
        return (
            <Container>
                <Carousel autoPlay infiniteLoop='true' className="h-30">
                    {
                        imagens.map(imagem => {
                            return (<Carousel.Item 
                                key={imagem.id}>
                                <img
                                className="d-block w-100"
                                src={imagem.src}
                                alt={imagem.alt}
                                />
                                <Carousel.Caption>
                                    <h3>{imagem.label}</h3>
                                    <p>{imagem.descricao}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                        })
                    }
                </Carousel>
            </Container>
        );
    }
}

export default BannerRotativo;