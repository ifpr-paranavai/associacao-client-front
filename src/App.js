import './App.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao'

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <BarraNavegacao />
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
    </div>);
  }
}

export default App;
