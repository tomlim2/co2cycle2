import React, { Component } from 'react';
import Background from './assets/js/background';
import Interactive from './assets/js/interactive';
import Cycle from './assets/js/cycle';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <Interactive/>
        <Cycle/>
      </div>
    );
  }
}

export default App;
