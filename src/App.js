import './App.css';
import React, { Component } from 'react';
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'
import BannerRotativo from './componentes/BannerRotativo/BannerRotativo'
import Rodape from './componentes/Rodape/Rodape'

class App extends Component{
  render(){
    return (<div>
      <BarraNavegacao />
      <BannerRotativo />
      <Rodape />
    </div>);
  }
}

export default App;
