import React, { Component } from 'react';
import Sky from './sky.js';
import Cloud from './cloud.js';
import Ground from './ground.js';
import ground from './../imgs/background/02_Ground.svg';
import sea1 from './../imgs/background/sea1.svg';
import iceberg1 from './../imgs/background/sea1_iceberg.svg';
import sea2 from './../imgs/background/sea2.svg';
import iceberg2 from './../imgs/background/sea2_iceberg.svg';
import sea3 from './../imgs/background/sea3.svg';
import sun from './../imgs/background/04_a_Sun.svg';
import cloud1 from './../imgs/background/04_b_Cloud.svg';
import cloud2 from './../imgs/background/04_b_Cloud2.svg';
import './../css/background.css';

class Background extends Component {
  render() {
    return (
      <div>
        <Sky/>

        <img className='sea3' src={sea3}/>
        <img className='iceberg2' src={iceberg2}/>
        <img className='sea2' src={sea2}/>
        <img className='iceberg1' src={iceberg1}/>
        <img className='sea1' src={sea1}/>
        <img className='groundSVG' src={ground}/>

        <img className='sun' src={sun}/>
        <Cloud/>
      </div>

    );
  }
}

export default Background;
