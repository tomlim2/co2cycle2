import React, { Component } from 'react';
import Sky from './sky.js';
import Cloud from './cloud.js';
import Ground from './ground.js';
import ground from './../imgs/background/02_Ground.png';
import sea1 from './../imgs/background/sea1.png';
import iceberg1 from './../imgs/background/sea1_iceberg.png';
import sea2 from './../imgs/background/sea2.png';
import iceberg2 from './../imgs/background/sea2_iceberg.png';
import sea3 from './../imgs/background/sea3.png';
import sun from './../imgs/background/04_a_Sun.png';
import cloud1 from './../imgs/background/04_b_Cloud.png';
import cloud2 from './../imgs/background/04_b_Cloud2.png';
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
