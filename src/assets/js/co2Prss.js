import React, { Component } from 'react';
import co2n from './../imgs/cycle/co2n2.svg';
import './../css/cycle.css';

class CO2 extends Component {
  constructor(props){
    super(props)
    this.randomBetween = this.randomBetween.bind(this)
    this.renderCO2 = this.renderCO2.bind(this)
  }
  randomBetween(x, y, s) {
    return x + Math.ceil(Math.random() * (y-x)) + s
  }
  componentWillMount() {
		this.style = {
			right: this.randomBetween(0, window.innerWidth - 50, 'px'),
			top: this.randomBetween(0, window.innerHeight - 200, 'px'),
			transform: `rotate(${this.randomBetween(-10, 10, 'deg')})`+ `translateY(${this.randomBetween(-1000, -2200, 'px')})`,
      animationDelay: this.randomBetween(12000, 36000, 'ms'),
      animationDuration: this.randomBetween(12000, 24000, 'ms'),
      opacity:1,
		}
	}
  renderCO2(){
    return(
      <div>
        <img className='co2 fallmv'style={this.style} src={co2n}/>
      </div>
    )
  }
  render(){
    return this.renderCO2();
  }
}

export default CO2;
