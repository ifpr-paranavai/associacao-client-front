import API from "./../Api";

class Eventos {
  static async listarEventos(limite, pagina) {
    try {
      const response = await API.get(`/eventos`, {
        params: { ...{ limite, pagina } },
      });
      return response.data;
    } catch (error) {
      // console.error('Erro ao obter dados da API:', error);
      throw error;
    }
  }

  static async buscarPorTitulo(titulo, limite, pagina) {
    const { data } = await API.get(`/eventos/titulo/${titulo}`, {
      params: { ...{ limite, pagina } },
    });
    return data;
  }

  static async buscarPorId(id) {
    try {
      const { data: evento } = await API.get(`/eventos/${id}`);
      const response = await API.get(`/eventos/${id}/anexo/download`, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      evento.url = url;
  
      return evento;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  
}

export default Eventos;
