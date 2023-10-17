import API from "../Api";
class HomeService {
  static async obterDados() {
    return {
      contato: {
        titulo: "Contato",
        fundo: "contato.jpg",
        fundoAlt: "Imagem de fundo Contato",
      },
      principal: {
        titulo: "AMAER",
        subtitulo: "Texto sobre a associação aeromodelismo.",
        fundo: "home.jpg",
        fundoAlt: "Imagem de fundo Home",
      },
      logo: {
        src: "logo-amaer.png",
        alt: "Logo da AMAER",
      },
    };
  }

  static async listarNoticias(limite, pagina) {
    try {
      const response = await API.get(`/noticias`, {
        params: { ...{ limite, pagina } },
      });
      return response.data;
    } catch (error) {
      // console.error('Erro ao obter dados da API:', error);
      throw error;
    }
  }

  static async buscarPorTitulo(titulo, limite, pagina) {
    const { data } = await API.get(`/noticias/titulo/${titulo}`, {
      params: { ...{ limite, pagina } },
    });
    return data;
  }

  static async buscarPorId(id) {
    try {
      const { data: noticia } = await API.get(`/noticias/${id}`);
      const response = await API.get(`/noticias/${id}/anexo/download`, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      noticia.url = url;
  
      return noticia;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static obterSobre() {
    const sobre = {
      texto: "Texto sobre a associação aeromodelismo.",
      // src: "https://i.ibb.co/8m90SxW/aviao3.png",
      // src: "https://i.ibb.co/ChYxYNJ/aviao4.png",
      src: "https://i.ibb.co/qnrRZKk/aviao2.png",
      //src: "https://i1.wp.com/www.amaer.com.br/wp-content/uploads/2018/05/cropped-logoamaerokpequeno.png?w=700&ssl=1",
      alt: "Avião",

      // <a href="https://ibb.co/rQHm1pC"><img src="https://i.ibb.co/8m90SxW/aviao3.png" alt="aviao3" border="0" /></a>
    };
    return sobre;
  }
}

export default HomeService;
