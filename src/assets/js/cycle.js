import React, { Component } from 'react';
import cycle1 from './../imgs/cycle/cycle1.png';
import cycle2 from './../imgs/cycle/cycle2.png';
import cycle3 from './../imgs/cycle/cycle3.png';
import co2 from './../imgs/cycle/co2.png';
import CO2 from './co2Prss.js';
import './../css/cycle.css';

class Cycle extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let createCO2 = () => {
      let co2s = []
      for (var i = 0; i < 20; i++) {
      co2s.push(<CO2/>)
      }
    return co2s
  }

    return (
      <div>

        <div className='co2cycle'>
          <img className='cycle1' src={cycle1}/>
          <img className='cycle2' src={cycle2}/>
          <img className='cycle3' src={cycle3}/>
          <img className='co2 citysidemv' src={co2}/>
          <img className='co2 citysidemv mvdelay1' src={co2}/>
          <img className='co2 citysidemv mvdelay2' src={co2}/>
          <img className='co2 seasidemv' src={co2}/>
          <img className='co2 treesidemv' src={co2}/>
        </div>

        {createCO2()}
      </div>

    );
  }
}

export default Cycle;
