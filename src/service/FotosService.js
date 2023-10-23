import API from "./../Api";

class Fotos {
  static async listarFotos(limite, pagina) {
    try {
      const response = await API.get(`/fotos`, {
        params: { ...{ limite, pagina } },
      });
      return response.data;
    } catch (error) {
      // console.error('Erro ao obter dados da API:', error);
      throw error;
    }
  }

  static async buscarPorTitulo(titulo, limite, pagina) {
    const { data } = await API.get(`/fotos/titulo/${titulo}`, {
      params: { ...{ limite, pagina } },
    });
    return data;
  }

  static async buscarPorId(id) {
    try {
      const { data: foto } = await API.get(`/fotos/${id}`);
      return foto;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  
}

export default Fotos;
