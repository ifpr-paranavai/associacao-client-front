import API from "./../Api";

class Videos {
  static async listarVideos(limite, pagina) {
    try {
      const response = await API.get(`/videos`, {
        params: { ...{ limite, pagina } },
      });
      return response.data;
    } catch (error) {
      // console.error('Erro ao obter dados da API:', error);
      throw error;
    }
  }

  static async buscarPorTitulo(titulo, limite, pagina) {
    const { data } = await API.get(`/videos/titulo/${titulo}`, {
      params: { ...{ limite, pagina } },
    });
    return data;
  }

  static async buscarPorId(id) {
    try {
      const { data: video } = await API.get(`/videos/${id}`);
      return video;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  
}

export default Videos;
