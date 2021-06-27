import API from "./../Api";
import textoModal from "../uteis/textoModal";

class ServicoAssociado {
  static async cadastrarAssociado(dadosDoFormulario) {
    const response = await API.post("/autocadastro", dadosDoFormulario);
    if (response.status !== 200) {
      throw new Error(`Erro ao processar sua requisição: ${response.status}`);
    }
    return response;
  }

  static async buscarTextoModal() {
    return await textoModal;
  }
}

export default ServicoAssociado;
