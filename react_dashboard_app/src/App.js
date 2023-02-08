import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Home } from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Dashboard</h1>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
