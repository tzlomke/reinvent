import React, { Component } from "react";
import "./App.css";
import Ideas from './pages/Ideas';
import IdeasDiscussed from "./pages/IdeasDiscussed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ideas />
        <IdeasDiscussed />
      </div>
    );
  }
}

export default App;
