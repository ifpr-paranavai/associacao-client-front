import './estilo.css';
import React, { Component} from 'react';
import AssociarService from '../../service/AssociarService'
import { Form, Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import MaskedFormControl from '../../componentes/MaskedFormControl/MaskedFormControl'
import estados from '../../uteis/estados'



class Associar extends Component{
  constructor (props){
    super(props);
    this.state = {
        estados: estados,
        cidades: estados[17].cidades
    }
    this.buscarCidades = this.buscarCidades.bind(this);
  }
  async handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target)
    const resposta = await AssociarService.postarDadosDoFormulario(data)
    alert(resposta)
  }

  async buscarCidades(event){
    event.preventDefault();
    const {value} = event.target
    estados.forEach(estado => {
      if (estado.sigla === value) {
        console.log(estado.cidades)
        this.setState({ cidades: estado.cidades})
      }
    });
  }

  async buscarCEP(event){
    event.preventDefault();
    const {value} = event.target
    
    const cep = value?.replace(/[^0-9]/g, '')

    if(cep?.length !== 8)
      return
    
    const resposta = await AssociarService.buscarCEP(cep)
    alert(JSON.stringify(resposta))
  }

  render(){
    return (
      <Container className="mt-5 pt-5 ">
        <Card className="efeito-card-form px-5 my-5"> 
          <Row className="justify-content-center mb-5 mx-5"> 
            <h1 className="my-3">Associe-se</h1>
          </Row>
          <Row className="justify-content-center mb-5 mx-5">
            <Form className = "formulario-contato" onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="imagem"> 
                  <Form.File className="mb-3" label="Foto 3x4" />        
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <h3 className="py-3">
                  <FontAwesomeIcon icon={faUser} size="1x" className="mr-2"/>
                  Dados do usuário
                </h3>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="nome">
                  <Form.Control placeholder="Nome" name="nome" size="lg"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="sobrenome">
                  <Form.Control placeholder="Sobrenome" name="sobrenome" size="lg"  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="dataNasc">
                  <Form.Control type="date" placeholder="Data de Nascimento" name="dataNasc" size="lg" />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6" controlId="" as={Col}>
                  <MaskedFormControl  placeholder="CPF" name="cpf" size="lg" mask="111.111.111-11" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="rg">
                  <Form.Control placeholder="RG" name="rg" size="lg" />  
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6" controlId="cep" as={Col}>
                  <MaskedFormControl  
                    placeholder="CEP" 
                    name="cep"
                    size="lg"
                    mask="11.111-111" 
                    onBlur={this.buscarCEP}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="estado">
                  <Form.Control placeholder="Estado" as="select" name="estado" size="lg" onChange={this.buscarCidades} defaultValue="PR">
                  {
                    estados.map(estado => {
                      return (
                        <option label={estado.nome} value={estado.sigla} key={estado.sigla}></option>
                      )}
                    )
                  }
                  </Form.Control>
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6" controlId="cidade" as={Col}>
                  <Form.Control placeholder="Cidade" as="select" name="cidade" size="lg" disabled={this.state.cidades?.length > 0 ? false : true} defaultValue="Maringá">
                  {
                    this.state.cidades.map(cidade => {
                      return (
                        <option label={cidade} value={cidade} key={cidade}></option>
                      )}
                    )
                  }
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-8" as={Col} controlId="rua">
                  <Form.Control placeholder="Rua" name="rua" size="lg"  />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-4" controlId="numero" as={Col}>
                  <Form.Control placeholder="Número" name="numero" size="lg"  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="telcel">
                  <MaskedFormControl mask="(11) 1 1111-1111" placeholder="Telefone Celular" name="telcel" size="lg"  />     
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6" controlId="whatsapp" as={Col}>
                  <Form.Check className="tamanho-texto ml-3 mt-2"  name="whatsapp" type="checkbox" label="Celular com WhatsApp?" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-6" as={Col} controlId="telresi">
                  <MaskedFormControl mask="(11) 1111-1111" placeholder="Telefone Residencial" name="telresi" size="lg"  />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6" controlId="telcom" as={Col}>
                  <MaskedFormControl mask="(11) 1111-1111" placeholder="Telefone Comercial" name="telcom" size="lg"  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="email">
                  <Form.Control placeholder="E-mail" type="email" name="email" size="lg"  /> 
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="emailalter" as={Col}>
                  <Form.Control placeholder="E-mal alternativo" type="email" name="emailalter" size="lg" />   
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Label column="lg" className="tamanho-texto">Modalidade Principal:</Form.Label>
                <Col>
                  <Form.Check className="tamanho-texto mt-2 mx-4" type="radio" name="modalidade" label="Aeromodelismo" value="Aeromodelismo" />
                </Col>
                <Col>
                  <Form.Check className="tamanho-texto mt-2 mx-4" type="radio" name="modalidade" label="Automodelismo" value="Automodelismo"/>
                </Col>
              </Form.Row>
              <Form.Row>
                <Form.Check name="noticias" className="tamanho-texto my-3 ml-2" type="checkbox" label="Aceito receber comunicados oficiais oriundos da diretoria da Amaer" />
              </Form.Row>
              <Form.Row className="justify-content-center mt-3">
                <Button  size="lg" variant="secondary" type="submit" >Enviar</Button>
              </Form.Row>
            </Form>
          </Row>
        </Card>
      </Container>         
    )
  }
}

export default Associar;
