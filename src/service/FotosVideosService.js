import Axios from 'axios';
import Config from '../uteis/configuracao';

class FotosVideos{
    
    static async obterFotos(){
        try{
            const {data} = await Axios.get(`${Config.api}/fotosvideos`)
            return data
        }catch(error){
            console.log(error)
            return error;
        }
        
    }

    static async obterVideos(){
        try{
            const {data} = await Axios.get(`${Config.api}/fotosvideos`)
            return data
        }catch(error){
            console.log(error)
            return error;
        }
        
    }
    
}

export default FotosVideos;