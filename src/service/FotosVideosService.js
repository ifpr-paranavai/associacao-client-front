import API from "./../Api";

class FotosVideos {
  static async obterFotos() {
    try {
      const { data } = await API.get(`/galeria/fotos`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async obterVideos() {
    try {
      const { data } = await API.get(`/galeria/videos`);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default FotosVideos;
