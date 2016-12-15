import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './ms-specific/main'


class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          <Main />
        </p>
      </div>
    );
  }
}

export default App;
