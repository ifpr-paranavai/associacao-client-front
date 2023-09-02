import API from "./../Api";

class Atas {
  static async obterAtas() {
    try {
      const { data } = await API.get(`/atas`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default Atas;
