import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  CardContent,
  CardMedia,
  Container,
  TableCell,
  TablePagination,
  TableRow,
  LinearProgress,
  Card,
  InputAdornment,
} from "@material-ui/core";
import { Row } from "react-bootstrap";
import { formatarData } from "../../uteis/formatarData";
import EventoService from "../../service/EventoService";
import { useNotify } from "../../contextos/Notificacao";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import { Search as SearchIcon } from "@material-ui/icons";
import API from "../../Api";
import TextField from "@material-ui/core/TextField";

function Eventos() {
  const [eventos, setEventos] = useState([]);
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
      const response = await API.get(`/eventos/${id}/anexo/download`, {
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
          dadosAPI = await EventoService.buscarPorTitulo(
            searchValue,
            rowsPerPage,
            page + 1
          );
        } else {
          dadosAPI = await EventoService.listarEventos(rowsPerPage, page + 1);
        }

        const eventosComPreview = await Promise.all(
          dadosAPI.rows.map(async (evento) => ({
            ...evento,
            previewUrl: await handlePreview(evento.id),
          }))
        );

        setCount(dadosAPI.count || dadosAPI.length);
        setEventos(eventosComPreview);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchValue, page, rowsPerPage]);

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
      ></Box>
      <Row className="justify-content-center">
        <h1 className="mb-3 mt-3 text-dark text-xs-center">Eventos</h1>
      </Row>
      <TextField
        placeholder="Buscar por titulo ou data"
        variant="outlined"
        size="small"
        style={{ width: "100%", maxWidth: "400px", padding: "15px" }}
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={3}>
        {(() => {
          if (loading) {
            return (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <LinearProgress />
                </TableCell>
              </TableRow>
            );
          }
          if (eventos.length > 0) {
            return eventos.map((evento) => (
              <Grid item key={evento.id} xs={12} sm={6} md={4}>
                <Card style={{ borderRadius: "16px" }}>
                  <Link to={`/site/evento/${evento.id}`}>
                    <CardMedia
                      component="img"
                      alt="Imagem do Evento"
                      height="220"
                      image={evento.previewUrl}
                      title="Imagem do Evento"
                    />
                  </Link>
                  <CardContent>
                    <Link
                      to={`/site/evento/${evento.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h2
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          fontFamily: "Arial",
                          wordWrap: "break-word",
                          color: "black",
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
                        {evento.titulo}
                      </h2>
                    </Link>

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
                    <ReactQuill
                      value={
                        evento.descricao.length > 129
                          ? `${evento.descricao.substring(0, 129)}...`
                          : evento.descricao
                      }
                      readOnly
                      theme={null}
                    />

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
                        fontSize: 16,
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
                </Card>
              </Grid>
            ));
          }
          return (
            <Grid>
              <TableCell colSpan={3} align="center">
                Nenhuma ata encontrada
              </TableCell>
            </Grid>
          );
        })()}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[3, 6, 12, 24]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        disabled={loading}
      />
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
