import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'
import Rodape from './componentes/Rodape/Rodape'
import Eventos from './paginas/Eventos/Eventos'
import Home from './paginas/Home/Home'
import Noticias from './componentes/Noticias/Noticias'
import SobreNos from './componentes/SobreNos/SobreNos'
import { Container } from 'react-bootstrap';

class App extends Component{
  render(){
    return (<div>
      <BarraNavegacao />
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/eventos" component={Eventos} />
              <Route component={Home} />
            </Switch>
          </Router>
        </Container>
      <Noticias />
      <SobreNos />
      <Rodape />
    </div>);
  }
}

export default App;
