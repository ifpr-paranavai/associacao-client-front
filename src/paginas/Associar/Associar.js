import './estilo.css';
import React, { Component} from 'react';
import AssociarService from '../../service/AssociarService'
import { Form, Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'



class Associar extends Component{
  async handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target)
    const resposta = await AssociarService.postarDadosDoFormulario(data)
    alert(resposta)
  }
  render(){
    return (
      
      <Container className="mt-5 pt-5 ">
        <Card className="efeito-card-form px-5 my-5"> 
          <Row className="justify-content-center mb-5 mx-5"> 
            <h1 className="my-3">
              Associe-se
            </h1>
          </Row>
          <Row className="justify-content-center mb-5 mx-5">
            <Form className = "formulario-contato" onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="imagem"> 
                  <Form.File className="mb-3" label="imagem" />        
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <h3 class="py-3">
                  <FontAwesomeIcon icon={faUser} size="md" className="mr-2"/>
                  &nbsp;Dados do usuário
                </h3>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control  className="mb-4" placeholder="Nome" id="nome" name="nome" size="lg"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control  className="mb-4" placeholder="Sobrenome" id="sobrenome" name="sobrenome" size="lg"  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col-sm-12 col-md-6" as={Col}>
                  <Form.Control className="mb-4" type="date" placeholder="Data de Nascimento" id="dataNasc" name="dataNasc" size="lg" />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6" controlId="cpf" as={Col}>
                  <Form.Control className="mb-4"  placeholder="CPF" name="cpf" size="lg" />
                </Form.Group>
                
              </Form.Row>
              <Col> 
                
               
               
                
                
                <Form.Control className="mb-4"  placeholder="RG" id="rg" name="rg" size="lg" />  
                <Form.Control  className="mb-4" placeholder="CEP" id="cep" name="cep" size="lg"  />
                <Form.Control  className="mb-4" placeholder="Estado" id="estado" name="estado" size="lg"  />   
                <Form.Control  className="mb-4" placeholder="Cidade" id="cidade" name="cidade" size="lg"  /> 
                <Row>
                  <Col>
                    <Form.Control  className="mb-4" placeholder="Rua" id="rua" name="rua" size="lg"  />
                  </Col>
                  <Col>
                    <Form.Control  className="mb-4" placeholder="Número" id="numero" name="numero" size="lg"  />
                  </Col>
                </Row>
                         
                <Form.Control  className="mb-4" placeholder="Telefone Residencial" id="telresi" name="telresi" size="lg"  />     
                <Form.Control  className="mb-4" placeholder="Telefone Celular" id="telcel" name="telcel" size="lg"  />   
                <Form.Control  className="mb-4" placeholder="Telefone Comercial" id="telcom" name="telcom" size="lg"  />  
                <Form.Label size = "lg">
                  <p className="tamanho-texto">Celular possui WhatsApp?</p>
                </Form.Label > 
                <Form.Check className="tamanho-texto mb-4 mx-4" type="checkbox" label="Possui" />
                <Form.Control  className="mb-4" placeholder="E-mail" id="email" name="email" size="lg"  /> 
                <Form.Control  className="mb-4" placeholder="E-mal alternativo" id="emailalter" name="emailalter" size="lg"  />   
                <Form.Label className="tamanho-texto">
                  Modalidade Principal:
                </Form.Label> 
                <Form.Check className="tamanho-texto mb-2 mx-4" type="checkbox" label="Aeromodelismo" />
                <Form.Check className="tamanho-texto mb-2 mx-4" type="checkbox" label="Automodelismo" />
                <Form.Label className="tamanho-texto my-2">
                  Quantidade de dependentes 
                </Form.Label > 
                <Form.Control className="mb-3" type="number" min="0" size="lg">
                </Form.Control>
                <Form.Control  className="mb-4" placeholder="Nome dos Dependentes" id="dependentes" name="dependentes" size="lg"  />   
                <Form.Label className="tamanho-texto">
                  Aceito receber comunicados oficiais oriundos da diretoria da Amaer 
                </Form.Label > 
                <Form.Check className="tamanho-texto mb-2 mx-4" type="checkbox" label="Concordo" />
                <Row>
                  <Col>
                    <Form.Control  className="mb-4" type="password" placeholder="Senha" id="senha" name="senha" size="lg"  /> 
                  </Col>
                  <Col>
                    <Form.Control  className="mb-4" type="password" placeholder="Confirmar Senha" id="confirmarsenha" name="confirmarsenha" size="lg"  /> 
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Button  size="lg" variant="secondary" type="submit" >
                      Enviar
                  </Button>
                </Row>
              </Col >
            </Form>
          </Row>
        </Card>
      </Container>         
    )
  }
}

export default Associar;
