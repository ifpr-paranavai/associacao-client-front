
import './App.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class NavBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
    </div>);
  }
}

export default NavBar;
