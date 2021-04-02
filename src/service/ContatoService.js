import API from './../Api';
import textoModal from '../uteis/textoModal'


class ContatoService{
    static async enviarMensagem(dadosDoFormulario) {
        console.log(dadosDoFormulario)
        const response = await API.post('/contato', dadosDoFormulario);
        if (response.status !== 200) {
            throw new Error(`Erro ao processar sua requisição: ${response.status}`); 
        }
    }

    static async buscarTextoModal(){
        
       return await textoModal;
    }
}

export default ContatoService;