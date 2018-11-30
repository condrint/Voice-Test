import React, { Component } from 'react';
import Peer from 'simple-peer';
import axios from 'axios';

var peer = null;

class App extends Component {

  constructor(){
    super()
    this.state = {
      input: ''
    }
    this.join = this.join.bind(this);
    this.leave = this.leave.bind(this);
    this.change = this.change.bind(this);
  }
  
  change(e){
    this.setState({input:e.target.value});
  }

  async join(){
    try {
      var peerConnectionInfo = await axios.get('/api/join');
    } catch(e){
      console.error(e);
    }
    let isInitiator = peerConnectionInfo.data.isInitiator;
    peer = new Peer({initiator: isInitiator});
  }

  leave(){

  }

  render() {
    return (
      <div className="App">
          <input value={this.state.input} onChange={this.change}/>
          <button onClick={this.join}>Join</button>
          <button onClick={this.leave}>Leave</button>
      </div>
    );
  }
}

export default App;
