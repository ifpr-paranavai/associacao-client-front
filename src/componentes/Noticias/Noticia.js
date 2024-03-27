import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core";
import { Row, Button} from "react-bootstrap";
import { formatarData } from "../../uteis/formatarData";
import NoticiaService from "../../service/HomeService";
import { useNotify } from "../../contextos/Notificacao";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Noticia() {
  const [noticia, setNoticia] = useState({});
  const notify = useNotify();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        let noticia = await NoticiaService.buscarPorId(id);
        setNoticia(noticia);
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
        paddingBottom="100px"
        paddingTop="12px"
      >
        {/* A busca vai aqui */}
      </Box>
      <Row className="justify-content-center">
        <h1 className="mb-3 mt-3 text-dark text-xs-center">{noticia.titulo}</h1>
      </Row>
      <Card style={{ borderRadius: "10px" }}>
        <div style={{ display: "flex", justifyContent: "center", margin: "50px 0"  }}>
          <CardMedia
            component="img"
            alt="Imagem do Evento"
            image={noticia.url}
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
            {`Data: ${formatarData(noticia.data_inicio)}`}
          </p>
          <ReactQuill value={noticia.descricao} readOnly theme={null} />
        </CardContent>
      </Card>
      <Row className="justify-content-end">
        <Button href="/site/" variant="secondary" size="lg">
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

export default Noticia;
