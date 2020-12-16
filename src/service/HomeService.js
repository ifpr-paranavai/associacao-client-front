
import Axios from 'axios';
import Config from '../uteis/configuracao';
class HomeService{
    
    static async obterNoticias(){
        try{
            const {data} = await Axios.get(`${Config.api}/noticias`)
            return data
        }catch(error){
            console.log(error)
            return error;
        }
        
    }
    static obterSobre(){
        const sobre = 
            {
                texto: "Texto sobre a associação aeromodelismo.",
                // src: "https://i.ibb.co/8m90SxW/aviao3.png",
                // src: "https://i.ibb.co/ChYxYNJ/aviao4.png",
                src: "https://i.ibb.co/qnrRZKk/aviao2.png",
                alt: "Não carregou"
                
                // <a href="https://ibb.co/rQHm1pC"><img src="https://i.ibb.co/8m90SxW/aviao3.png" alt="aviao3" border="0" /></a>
            }
        return sobre;
    }
}

export default HomeService;