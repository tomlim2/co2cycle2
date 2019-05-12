import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

      play: false,
      pause: true

    };

    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);

  }

  play(){
    this.setState({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  }

  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }

  render() {

  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
    </div>
    );
  }
}


export default Music
