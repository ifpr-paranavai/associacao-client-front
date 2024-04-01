import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  CardContent,
  CardMedia,
  IconButton,
  Container,
  TableRow,
  TableCell,
  TablePagination,
  LinearProgress,
  InputAdornment,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { Row } from "react-bootstrap";
import VideoService from "../../service/VideosService";
import { Search as SearchIcon } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import YouTube from "react-youtube";
import CloseIcon from "@material-ui/icons/Close";

function Videos() {
  const [videos, setVideos] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
    setModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let dadosAPI;
        if (searchValue) {
          dadosAPI = await VideoService.buscarPorTitulo(
            searchValue,
            rowsPerPage,
            page + 1
          );
        } else {
          dadosAPI = await VideoService.listarVideos(rowsPerPage, page + 1);
        }
        setCount(dadosAPI.count || dadosAPI.length);
        setVideos(dadosAPI.rows || dadosAPI);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchValue, page, rowsPerPage, notify]);

  function extractVideoId(url) {
    const regex =
      // eslint-disable-next-line
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

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
        <h1 className="mb-3 mt-3 text-dark text-xs-center">Videos</h1>
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
          if (videos.length > 0) {
            return videos.map((video) => {
              const videoId = extractVideoId(video.link);
              const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <Grid item key={video.id} xs={12} sm={6} md={4}>
                  <Card
                    style={{
                      borderRadius: "16px",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="Thumbnail do Video"
                      height="220"
                      image={thumbnailUrl}
                      title="Thumbnail do Video"
                      onClick={() => openModal(videoId)}
                    />
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
                        onClick={() => openModal(videoId)}
                        onMouseEnter={(e) => {
                          e.target.style.color = "blue";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "black";
                        }}
                      >
                        {video.titulo}
                      </h2>
                    </CardContent>
                  </Card>
                </Grid>
              );
            });
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
      <Dialog open={modalOpen} onClose={closeModal} maxWidth="lg" scroll="body">
      <IconButton
        edge="end"
        color="inherit"
        onClick={closeModal}
        style={{ position: "absolute", right: 0, top: 0, zIndex: 1 }}
      >
        <CloseIcon />
      </IconButton>
        <DialogContent>
          {selectedVideoId && (
            <YouTube
              videoId={selectedVideoId}
              opts={{ height: "540px", width: "960px" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default Videos;
