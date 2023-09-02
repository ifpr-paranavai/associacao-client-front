import API from "./../Api";

class Eventos {
  static async obterEventos() {
    try {
      const { data } = await API.get(`/eventos`);
      const eventosComUrl = await Promise.all(
        data.map(async evento => {
          const response = await API.get(`/eventos/${evento.id}/anexo/download`, {
            responseType: 'blob',
          });
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const url = window.URL.createObjectURL(blob);
          return { ...evento, url };
        }),
      );
      return eventosComUrl;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Eventos;
