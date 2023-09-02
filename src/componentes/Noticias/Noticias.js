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
} from "@material-ui/core";
import { Row, Button } from "react-bootstrap";
import { formatarData } from "../../uteis/formatarData";
import NoticiaService from "../../service/HomeService";
import { useNotify } from "../../contextos/Notificacao";
import styles from "./estilo.css";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const notify = useNotify();

  useEffect(() => {
    async function fetchData() {
      try {
        let noticias = await NoticiaService.obterNoticias();
        setNoticias(noticias);
      } catch (error) {
        notify.showError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="mb-3 mt-3 text-dark text-xs-center">Notícias</h1>
      </Row>
      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Grid item key={noticia.id} xs={12} sm={6} md={4}>
            <Card style={{ borderRadius: "10px" }}>
              <CardMedia
                component="img"
                alt="Imagem do Noticia"
                height="220"
                image={noticia.url}
                title="Imagem do Noticia"
              />
              <CardContent>
                <h2 style={{ fontFamily: "Arial", wordWrap: "break-word"}}>
                  {noticia.titulo}
                </h2>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: 16,
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  {`${formatarData(noticia.data_inicio)}`}
                </p>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: 18,
                    wordWrap: "break-word",
                  }}
                >
                  {noticia.descricao}
                </p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingBottom="20px"
        paddingTop="12px"
      ></Box>
      <Row className="justify-content-end">
        <Button href="/noticias" variant="secondary" size="lg">
          + Notícias
        </Button>
      </Row>
    </Container>
  );
}

export default Noticias;
