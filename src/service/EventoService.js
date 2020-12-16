import Axios from 'axios';
import Config from '../uteis/configuracao';

class Eventos{
    
    static async obterEventos(){
        try{
            const {data} = await Axios.get(`${Config.api}/eventos`)
            return data
        }catch(error){
            console.log(error)
            return error;
        }
        
    }
    
}

export default Eventos;