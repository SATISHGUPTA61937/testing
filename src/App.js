import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cap from './Cap.js';
import Nap from './Nap.js';
import Tap from './Tap.js';

class App extends React.Component{
  state = {
    name : "I am fron Cap"
  }
  render(){
    return(
      <div>
        <Cap names={this.state.name}></Cap>
        <Nap></Nap>
        <Tap></Tap>
      </div>
    )
  }
}

export default App;
