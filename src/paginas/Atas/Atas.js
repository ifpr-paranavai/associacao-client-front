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
  Button,
  TableRow,
  TableCell,
  TablePagination,
  LinearProgress,
  InputAdornment,
} from "@material-ui/core";
import { Row, Button as ButtonBootstrap } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GetAppIcon from "@material-ui/icons/GetApp";
import { formatarData } from "../../uteis/formatarData";
import AtasService from "../../service/AtasService";
import { useNotify } from "../../contextos/Notificacao";
import styles from "./estilo.css";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import { Search as SearchIcon } from "@material-ui/icons";
import API from "../../Api";
import TextField from "@material-ui/core/TextField";

function Atas() {
  const [atas, setAtas] = useState([]);
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

  async function handleDownloadAnexo(id) {
    try {
      const response = await API.get(`/atas/${id}/anexo/download`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `anexo_${id}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      notify.showError(`${error}`);
    }
  }

  async function handlePreviewAnexo(id) {
    try {
      const response = await API.get(`/atas/${id}/anexo/download`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
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
          dadosAPI = await AtasService.buscarPorTitulo(
            searchValue,
            rowsPerPage,
            page + 1
          );
        } else {
          dadosAPI = await AtasService.obterAtas(rowsPerPage, page + 1);
        }
        setCount(dadosAPI.count || dadosAPI.length);
        setAtas(dadosAPI.rows || dadosAPI);
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
        <h1 className="mb-3 mt-3 text-dark text-xs-center">Atas</h1>
      </Row>
      <TextField
        placeholder="Buscar por titulo"
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
          if (atas.length > 0) {
            return atas.map((ata) => (
              <Grid item key={atas.id} xs={12} sm={6} md={4}>
                <Card style={{ borderRadius: "16px" }}>
                  <CardContent>
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
                      onClick={() => {
                        handlePreviewAnexo(ata.id);
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "blue";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "black";
                      }}
                    >
                      {ata.titulo}
                    </h2>
                    <p
                      style={{
                        fontFamily: "Arial",
                        fontSize: 18,
                        wordWrap: "break-word",
                      }}
                    >
                      {ata.descricao}
                    </p>
                    <IconButton
                      aria-label="visualizar"
                      onClick={() => {
                        handlePreviewAnexo(ata.id);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton
                      aria-label="download"
                      onClick={() => {
                        handleDownloadAnexo(ata.id);
                      }}
                    >
                      <GetAppIcon />
                    </IconButton>
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

export default Atas;
