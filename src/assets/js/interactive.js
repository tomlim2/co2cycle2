import React, { Component } from 'react';
import city from './../imgs/interactive/City.svg';
import corals from './../imgs/interactive/Corals.svg';
import seaweed from './../imgs/interactive/Seaweed.svg';
import trees from './../imgs/interactive/Trees.svg';
import car from './../imgs/interactive/Car.svg';
import './../css/interactive.css';

class Interactive extends Component {
  render() {
    return (
      <div>
        <div className='mvbox shakemv city'>
          <img className='interactive' src={city}/>
        </div>

        <img className='car' src={car}/>

        <div className='mvbox shakemv seaweed'>
          <img className='interactive' src={seaweed}/>
        </div>

        <div className='mvbox shakemv trees'>
          <img className='interactive' src={trees}/>
        </div>

        <div className='mvbox shakemv corals'>
          <img className='interactive' src={corals}/>
        </div>

      </div>

    );
  }
}

export default Interactive;
