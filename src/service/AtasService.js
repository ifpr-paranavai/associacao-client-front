import API from "./../Api";

class Atas {
  static async obterAtas(limite, pagina) {
    try {
      const response = await API.get(`/atas`, {
        params: { ...{ limite, pagina } },
      });
      return response.data;
    } catch (error) {
       console.log(error);
      throw error;
    }
  }

  static async buscarPorTitulo(titulo, limite, pagina) {
    const { data } = await API.get(`/atas/titulo/${titulo}`, {
      params: { ...{ limite, pagina } },
    });
    return data;
  }
}
export default Atas;
