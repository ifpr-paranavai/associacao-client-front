import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'
import Rodape from './componentes/Rodape/Rodape'
import Eventos from './paginas/Eventos/Eventos'
import Home from './paginas/Home/Home'

class App extends Component{
  render(){
    return (<div>
      <BarraNavegacao />  
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eventos" component={Eventos} />
          <Route component={Home} />
        </Switch>
      </Router>
      <Rodape />
    </div>);
  }
}

export default App;
