import API from "./../Api";

class Classificados {
  static async obterClassificados() {
    try {
      const { data } = await API.get(`/classificados`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Classificados;
