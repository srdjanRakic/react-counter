import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Counter/Counter';

class App extends Component {
  state = { deadline: '2025-11-30' };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Skynet's counter</h1>
        </header>
        <div className="App-intro">
          <Clock {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;