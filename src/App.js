import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Rodape from "./componentes/Rodape/Rodape";
import Eventos from "./paginas/Eventos/Eventos";
import Evento from "./paginas/Eventos/Evento";
import Classificados from "./paginas/Classificados/Classificados";
import Atas from "./paginas/Atas/Atas";
import FotosVideos from "./paginas/FotosVideos/FotosVideos";
import Associar from "./paginas/Associar/Associar";
import Home from "./paginas/Home/Home";
import { baseRoute } from "./configuracao.json";

class App extends Component {
  render() {
    return (
      <div>
        <BarraNavegacao />
        <Router>
          <Switch>
            <Route exact path={baseRoute + "/"} component={Home} />
            <Route path={baseRoute + "/eventos"} component={Eventos} />
            <Route path={baseRoute + "/evento/:id"} component={Evento} />
            <Route path={baseRoute + "/associar"} component={Associar} />
            <Route path={baseRoute + "/classificados"} component={Classificados} />
            <Route path={baseRoute + "/atas"} component={Atas} />
            <Route path={baseRoute + "/fotosvideos"} component={FotosVideos} />
            <Route component={Home} />
          </Switch>
        </Router>
        <Rodape />
      </div>
    );
  }
}

export default App;
