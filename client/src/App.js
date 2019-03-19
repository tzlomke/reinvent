import React, { Component } from 'react';
import './App.css';
import Poll from './components/Poll'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Poll/>
      </div>
    );
  }
}

export default App;
