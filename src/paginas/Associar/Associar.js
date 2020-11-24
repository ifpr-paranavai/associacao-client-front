import './estilo.css';
import React, { Component} from 'react';
import AssociarService from '../../service/AssociarService'
import { Form, Container, Row, Col, Button} from 'react-bootstrap';


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
          <Row className="justify-content-center mb-5"> 
            <h1 className="my-3">
              Associe-se
            </h1>
          </Row>
          <Form className = "pb-5 formulario-contato" onSubmit={this.handleSubmit}>
            <Row >
              <Col>
                <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Imagem</Form.File.Label>
                <Form.File.Input />
                </Form.File>
                <Form.Control  className="mb-4" placeholder="Nome de Usuário" id="usuario" name="usuario" size="lg"  />
                <Form.Control  className="mb-4" placeholder="Nome Completo" id="nome" name="nome" size="lg"  />
                <Form.Control className="mb-4" type="date" placeholder="RG" id="dataNasc" name="dataNasc" size="lg" />
                <Form.Control className="mb-4"  placeholder="CPF" id="cpf" name="cpf" size="lg" />
                <Form.Control className="mb-4"  placeholder="RG" id="rg" name="rg" size="lg" />  
                <Row>
                  <Col>
                    <Form.Control  className="mb-4" placeholder="Rua" id="rua" name="rua" size="lg"  />
                  </Col>
                  <Col>
                    <Form.Control  className="mb-4" placeholder="Número" id="numero" name="numero" size="lg"  />
                  </Col>
                </Row>   
                <Form.Control  className="mb-4" placeholder="Cidade" id="cidade" name="cidade" size="lg"  />
                <Form.Control  className="mb-4" placeholder="Estado" id="estado" name="estado" size="lg"  />
                <Form.Control  className="mb-4" placeholder="CEP" id="cep" name="cep" size="lg"  />
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
                <Form.Control className="mb-3" as="select" size="lg" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
                <Button  size="lg" variant="secondary" type="submit" >
                    Enviar
                </Button>
              </Col>
            </Row>

          </Form>
          
      </Container>         
    )
  }
}

export default Associar;
