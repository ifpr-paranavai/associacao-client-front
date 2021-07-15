import API from "./../Api";

class Eventos {
  static async obterEventos() {
    try {
      const { data } = await API.get(`/eventos`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Eventos;
