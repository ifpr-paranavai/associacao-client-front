

class HomeService{
    static obterImagensDoBanner(){
        const imagens = [
            {
                id:1,
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
                alt: "First slide",
                label: "First slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                id:2,
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(36).jpg",
                alt: "Segundo slide",
                label: "Segundo slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                id:3,
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(37).jpg",
                alt: "Terceiro slide",
                label: "Terceiro slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                id:4,
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(34).jpg",
                alt: "Terceiro slide",
                label: "Terceiro slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            }
        ]
        return imagens;
    }
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
                src: "https://static.pingendo.com/cover-moon.svg",
                alt: "Não carregou"
                
            }
        return sobre;
    }
}

export default HomeService;