import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'
import Rodape from './componentes/Rodape/Rodape'
import Eventos from './paginas/Eventos/Eventos'
import Classificados from './paginas/Classificados/Classificados'
import FotosVideos from './paginas/FotosVideos/FotosVideos'
import Associar from './paginas/Associar/Associar'
import Home from './paginas/Home/Home'

class App extends Component{
  render(){
    return (<div>
      <BarraNavegacao />  
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/associar" component={Associar} />
          <Route path="/classificados" component={Classificados}/>
          <Route path="/fotosvideos" component={FotosVideos}/>
          <Route component={Home} />
        </Switch>
      </Router>
      <Rodape />
    </div>);
  }
}

export default App;
