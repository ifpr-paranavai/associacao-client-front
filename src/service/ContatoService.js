import API from './../Api';

class ContatoService {
    static async enviarMensagem(dadosDoFormulario) {
        const response = await API.post('/contato', dadosDoFormulario);
        if (response.status !== 201) {
            throw new Error(`Erro ao processar sua requisição: ${response.status}`); 
        }
        return response.data;
    }

    static async buscarTextoModal() {
        const response = await API.get("/textoModal");
        if (response.status !== 200) {
          throw new Error(`Erro ao processar sua requisição: ${response.status}`);
        }
        return response.data;
      }
}

export default ContatoService;