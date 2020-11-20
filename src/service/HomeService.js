

class HomeService{
    
    static obterNoticias(){
        const noticias = [
            {
                id:1,
                src: "https://i0.wp.com/www.amaer.com.br/wp-content/uploads/2019/09/amaer-campeonato-banner-1.jpg?w=1200&ssl=1",
                alt: "First slide",
                titulo: "Notícia 1",
                chamada: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                id:2,
                src: "https://i2.wp.com/www.amaer.com.br/wp-content/uploads/2018/10/festival2018automodelismo.jpg?w=1200&ssl=1",
                alt: "Segundo slide",
                titulo: "Notícia 2",
                chamada: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                id:3,
                src: "https://i0.wp.com/www.amaer.com.br/wp-content/uploads/2018/06/copaamaeragosto2018.jpg?w=1200&ssl=1",
                alt: "Terceiro slide",
                titulo: "Notícia 3",
                chamada: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            }
        ]
        return noticias;
    }
    static obterSobre(){
        const sobre = 
            {
                texto: "Texto sobre a associação aeromodelismo.",
                src: "https://cdn.pixabay.com/photo/2014/01/14/23/32/viper-jet-245300_960_720.jpg",
                alt: "Não carregou"
                
            }
        return sobre;
    }
}

export default HomeService;