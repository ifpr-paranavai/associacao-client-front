import './estilo.css';
import React, { Component} from 'react';
import {Card, Row, Button, CardDeck, Container} from 'react-bootstrap';
import FotosVideosService from '../../service/FotosVideosService'



class FotosVideos extends Component{
  constructor (props){
    super(props);
    this.state = {
        fotos: [],
        videos: []

    }
  }
  async componentDidMount() {
      let fotos = await FotosVideosService.obterFotos();
      this.setState({ fotos })
 
      let videos = await FotosVideosService.obterVideos();
      this.setState({ videos })
}
   render(){
   
    const {fotos} = this.state
    const {videos} = this.state
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Fotos</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            fotos.map(foto => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-eventos" key={foto.id}>
                  <Card.Img variant="top" 
                    src= {foto.src }
                    alt={foto.alt}
                  />
                </Card>
              )}
            )
          }
        </CardDeck>
        <Row className="justify-content-end">
          <Button href="/classificados" variant="secondary" size="lg">+ Fotos</Button>
        </Row>
      

      
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Vídeos</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            videos.map(video => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-eventos" key={video.id}>
                  <Card.Img variant="top" 
                    src= {video.src }
                    alt={video.alt}
                  />
                </Card>
              )}
            )
          }
        </CardDeck>
          <Row className="justify-content-end">
            <Button href="/fotosvideos" variant="secondary" size="lg">+ Vídeos</Button>
          </Row>
      </Container>
    )
  }
}
export default FotosVideos;
