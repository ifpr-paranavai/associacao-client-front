import API from "./../Api";

class Classificados {
  static async obterClassificados(limite = 3, pagina = 1) {
    try {
      const { data } = await API.get(`/classificados-cliente`, {
        params: { limite, pagina }
      });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Classificados;