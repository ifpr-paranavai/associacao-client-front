

class HomeService{
    static obterImagensDoBanner(){
        const imagens = [
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
                alt: "First slide",
                label: "First slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(36).jpg",
                alt: "Segundo slide",
                label: "Segundo slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(37).jpg",
                alt: "Terceiro slide",
                label: "Terceiro slide label",
                descricao: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            }
        ]
        return imagens;
    }
}

export default HomeService;