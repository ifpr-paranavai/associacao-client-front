

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
}

export default AssociarService;