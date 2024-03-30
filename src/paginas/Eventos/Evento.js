import React, { useState, useEffect } from "react";
import {
  Box,
  CardContent,
  Card,
  CardMedia,
  Container,
  Button,
} from "@material-ui/core";
import { Row } from "react-bootstrap";
import { formatarData } from "../../uteis/formatarData";
import EventoService from "../../service/EventoService";
import { useNotify } from "../../contextos/Notificacao";
import "./estilo.css";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Evento() {
  const [evento, setEvento] = useState({});
  const notify = useNotify();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        let evento = await EventoService.buscarPorId(id);
        setEvento(evento);
      } catch (error) {
        notify.showError(error.message);
      }
    }
    fetchData();
  }, [id, notify]);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingBottom="100px"
        paddingTop="12px"
      >
        {/* A busca vai aqui */}
      </Box>
      <Row className="justify-content-center">
        <h1 className="mb-3 mt-3 text-dark text-xs-center">{evento.titulo}</h1>
      </Row>
      <Card style={{ borderRadius: "10px" }}>
        {evento.data_inicio && evento.data_fim ? 
        <>
          <div style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
            <CardMedia
              component="img"
              alt="Imagem do Evento"
              image={evento.url}
              title="Imagem do Evento"
              style={{
                objectFit: "cover",
                width: "40%",
                height: "40%",
                borderRadius: "10px",
              }}
            />
          </div>
          <CardContent>
            <p
              style={{
                fontFamily: "Arial",
                fontSize: 24,
                wordWrap: "break-word",
              }}
            >
              {" "}
              {`Data: ${formatarData(evento.data_inicio)} a ${formatarData(
                evento.data_fim
              )}`}
            </p>
            <ReactQuill value={evento.descricao} readOnly theme={null} />
            <p
              style={{
                fontFamily: "Arial",
                fontSize: 18,
                wordWrap: "break-word",
              }}
            >
              {`Local: ${evento.local}`}
            </p>
            <p
              style={{
                fontFamily: "Arial",
                fontSize: 18,
                wordWrap: "break-word",
              }}
            >
              Participe:{" "}
              <a
                href={`//${evento.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {evento.link}
              </a>
            </p>
          </CardContent>
          </>
        :
        null}
      </Card>
      <Row className="justify-content-end">
        <Button href="/site/eventos" variant="secondary" size="lg">
          Voltar
        </Button>
      </Row>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingBottom="20px"
        paddingTop="12px"
      ></Box>
    </Container>
  );
}

export default Evento;
