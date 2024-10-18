import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import ClassificadosService from '../../service/ClassificadosService';
import './estilo.css';

const Classificados = () => {
  const [classificados, setClassificados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchClassificados();
  }, [pagina]);

  const fetchClassificados = async () => {
    try {
      const response = await ClassificadosService.obterClassificados(3, pagina);
      if (response && Array.isArray(response)) {
        setClassificados(prevClassificados => [...prevClassificados, ...response]);
        setTotalPages(Math.ceil(response.length / 3));
      } else if (response && response.rows && Array.isArray(response.rows)) {
        setClassificados(prevClassificados => [...prevClassificados, ...response.rows]);
        setTotalPages(Math.ceil(response.count / 3));
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching classificados:", error);
    }
  };

  const handleLoadMore = () => {
    if (pagina < totalPages) {
      setPagina(prevPagina => prevPagina + 1);
    }
  };

  const renderClassificados = () => {
    const rows = [];
    for (let i = 0; i < classificados.length; i += 3) {
      rows.push(
          <Row key={i} className="mb-4">
            {classificados.slice(i, i + 3).map(classificado => (
                <Col key={classificado.id} xs={12} md={4}>
                  <Card className="h-100 borda-cards-eventos">
                    <Card.Img variant="top" src={classificado.imagem} alt={classificado.imagem} />
                    <Card.Body>
                      <Card.Title>{classificado.nome}</Card.Title>
                      <Card.Text>{classificado.descricao}</Card.Text>
                      <Card.Text>{classificado.preco}</Card.Text>
                      <Card.Text>{classificado.contato}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            ))}
          </Row>
      );
    }
    return rows;
  };

  return (
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <h1 className="text-dark text-center">Classificados</h1>
        </Row>
        {renderClassificados()}
        {pagina < totalPages && (
            <Row className="justify-content-center mt-4">
              <Button onClick={handleLoadMore} variant="secondary" size="lg">+ Classificados</Button>
            </Row>
        )}
      </Container>
  );
};

export default Classificados;