import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
  Container,
  TableRow,
  TableCell,
  TablePagination,
  LinearProgress,
  InputAdornment,
} from "@material-ui/core";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatarData } from "../../uteis/formatarData";
import NoticiaService from "../../service/HomeService";
import { useNotify } from "../../contextos/Notificacao";
import styles from "./estilo.css";
import ReactQuill from "react-quill";
import TextField from "@material-ui/core/TextField";
import { Search as SearchIcon } from "@material-ui/icons";
import API from "../../Api";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const notify = useNotify();
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
  };

  async function handlePreview(id) {
    try {
      const response = await API.get(`/noticias/${id}/anexo/download`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = window.URL.createObjectURL(blob);
      return url;
    } catch (error) {
      notify.showError(`${error}`);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let dadosAPI;
        if (searchValue) {
          dadosAPI = await NoticiaService.buscarPorTitulo(
            searchValue,
            rowsPerPage,
            page + 1
          );
        } else {
          dadosAPI = await NoticiaService.listarNoticias(rowsPerPage, page + 1);
        }

        const noticiasComPreview = await Promise.all(
          dadosAPI.rows.map(async (noticia) => ({
            ...noticia,
            previewUrl: await handlePreview(noticia.id),
          }))
        );

        setCount(dadosAPI.count || dadosAPI.length);
        setNoticias(noticiasComPreview);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchValue, page, rowsPerPage]);

  return (
    <Container >
      <Row className="justify-content-center">
        <h1 className="mb-3 mt-3 text-white text-xs-center">Notícias</h1>
      </Row>
      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Grid item key={noticia.id} xs={12} sm={6} md={4}>
            <Card style={{ borderRadius: "10px" }}>
              <Link to={`/site/noticia/${noticia.id}`}>
                <CardMedia
                  component="img"
                  alt="Imagem da Noticia"
                  height="75"
                  image={noticia.previewUrl}
                  title="Imagem da Noticia"
                />
              </Link>
              <CardContent>
                <Link
                  to={`/site/noticia/${noticia.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      fontFamily: "Arial",
                      fontSize: 20,
                      wordWrap: "break-word",
                      color: "#00A7E0",
                      cursor: "pointer",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "blue";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "black";
                    }}
                  >
                    {noticia.titulo}
                  </h2>
                </Link>
                <p
                  style={{
                    fontFamily: "Arial",
                    fontSize: 18,
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  {`${formatarData(noticia.data_inicio)}`}
                </p>
                <ReactQuill
                  value={
                    noticia.descricao.length > 129
                      ? `${noticia.descricao.substring(0, 129)}...`
                      : noticia.descricao
                  }
                  readOnly
                  theme={null}
                />
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
      <Row className="justify-content-end padding-botao">
        <Button href="/noticias" size="lg">
          + Notícias
        </Button>
      </Row>
    </Container>
  );
}

export default Noticias;
