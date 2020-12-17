import Axios from 'axios';
import Config from '../uteis/configuracao';

class Classificados{
    
    static async obterClassificados(){
        try{
            const {data} = await Axios.get(`${Config.api}/classificados`)
            return data
        }catch(error){
            console.log(error)
            return error;
        }
        
    }
    
}

export default Classificados;