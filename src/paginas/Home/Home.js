import "./estilo.css";
import React, { Component } from "react";
import HomeService from "./../../service/HomeService";
import Noticias from "./../../componentes/Noticias/Noticias";
import SobreNos from "./../../componentes/SobreNos/SobreNos";
import Contato from "./../../componentes/Contato/Contato";
import { apiHost } from "./../../configuracao.json";
import { Parallax } from "react-parallax";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: {
        contato: {},
        principal: {},
        logo: {},
      },
    };
  }
  async componentDidMount() {
    let dados = await HomeService.obterDados();
    this.setState({ dados });
  }
  render() {
    const { dados } = this.state;

    return dados ? (
      <>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={apiHost + "/imagem/" + dados.principal.fundo}
          bgImageAlt={dados.principal.fundoAlt}
          strength={200}
        >
          <section className="principal py-5" id="sobrenos">
            <SobreNos dados={dados.principal} logo={dados.logo} />
          </section>
        </Parallax>
        <section className="fundo-preto py-5 text-center" id="idnoticias">
          <Noticias />
        </section>
        <Parallax
          bgImage={apiHost + "/imagem/" + dados.contato.fundo}
          bgImageAlt={dados.contato.fundoAlt}
          strength={-200}
        >
          <section className="py-5" id="contato">
            <Contato titulo={dados.contato.titulo} />
          </section>
        </Parallax>
      </>
    ) : (
      <div>fallback</div>
    );
  }
}

export default Home;
