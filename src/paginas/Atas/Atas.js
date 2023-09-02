import './estilo.css';
import React, { Component} from 'react';
import {Card, Row, Button, CardDeck, Container} from 'react-bootstrap';
import {IconButton} from '@material-ui/core';
import Axios from 'axios';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Config from '../../configuracao.json';
import AtaService from './../../service/AtasService'
// import Atas from './../../componentes/Atas/Atas';



class Atas extends Component{
  constructor (props){
    super(props);
    this.state = {
        atas: []
    }
  }
  async componentDidMount() {
      let atas = await AtaService.obterAtas();
      this.setState({ atas })
  }
   render(){
   
    const {atas} = this.state
    // let atas2 = this.state.atas;

    async function handleDownloadAnexo(id) {
      try {
        const response = await Axios.get(`${Config.apiHost}/atas/${id}/anexo/download`, {
          responseType: 'blob',
        });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `anexo_${id}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (error) {
      }
    }

    async function handlePreviewAnexo(id) {
      try {
        const response = await Axios.get(`${Config.apiHost}/atas/${id}/anexo/download`, {
          responseType: 'blob',
        });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
      } catch (error) {
      }
    }
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <h1 className="mb-3 mt-3 text-dark text-xs-center">Atas</h1>
        </Row>
        <CardDeck className="mb-3">
          {
            atas.map(ata => {
              return (
                <Card className = "col-6 col-lg-4 p-4 my-3 mx-4 borda-cards-atas" key={ata.id}>
                  <Card.Body>
                    <Card.Title>{ata.titulo} </Card.Title>
                    <Card.Title>{ata.descricao} </Card.Title>
                    <IconButton
                    aria-label="visualizar"
                    onClick={() => {
                      handlePreviewAnexo(ata.id);
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                    <IconButton
                    aria-label="download"
                    onClick={() => {
                      handleDownloadAnexo(ata.id);
                    }}
                  >
                    <GetAppIcon />
                    </IconButton>
                  </Card.Body>
                </Card>
              )}
            )
          }
        </CardDeck>
        <Row className="justify-content-end">
          <Button href="/atas" variant="secondary" size="lg">+ Atas</Button>
        </Row>
      </Container>   
    )

  }
}

export default Atas;
