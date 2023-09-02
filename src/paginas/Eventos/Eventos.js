import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActions,
  Link,
  Avatar,
  IconButton,
  Container,
  Button,
} from "@material-ui/core";
import { formatarData } from "../../uteis/formatarData";
import EventoService from "../../service/EventoService";
import { useNotify } from "../../contextos/Notificacao";
import styles from "./estilo.css";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const notify = useNotify();

  useEffect(() => {
    async function fetchData() {
      try {
        let eventos = await EventoService.obterEventos();
        setEventos(eventos);
      } catch (error) {
        notify.showError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingBottom="120px"
        paddingTop="12px"
      >
        {/* A busca vai aqui */}
      </Box>
      <Grid container spacing={3}>
        {eventos.map((evento) => (
          <Grid item key={evento.id} xs={12} sm={6} md={4}>
            <Card style={{ borderRadius: "16px" }}>
              <CardMedia
                component="img"
                alt="Imagem do Evento"
                height="220"
                image={evento.url}
                title="Imagem do Evento"
              />
              <CardContent>
                <h2 style={{ fontFamily: "Arial", wordWrap: "break-word" }}>
                  {evento.titulo}
                </h2>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: 16,
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  {`${formatarData(evento.data_inicio)} a ${formatarData(
                    evento.data_fim
                  )}`}
                </p>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: 18,
                    wordWrap: "break-word",
                  }}
                >
                  {evento.descricao}
                </p>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: 16,
                    wordWrap: "break-word",
                  }}
                >
                  {evento.local}
                </p>
                <a
                  href={`//${evento.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {evento.link}
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* qualquer outra coisa aqui */}
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

export default Eventos;
