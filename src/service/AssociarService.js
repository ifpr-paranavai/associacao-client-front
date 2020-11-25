import Axios from 'axios';

class AssociarService{
    static postarDadosDoFormulario(dadosDoFormulario){
        var object = {};
        //Transforma para objeto
        dadosDoFormulario.forEach(function(value, key){
            object[key] = value;
        });
        //Transforma para JSON
        var json = JSON.stringify(object);

        //Envia para api
        console.log("AssociarServiceFazer uma requisição post para api quando implementada")
        console.log(json)
        return json;
    }
    static async buscarCEP(cep){
        try{
            const {data} = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            return data
        }catch(error){
            console.log(error)
            return error;
        }
    }
}

export default AssociarService;