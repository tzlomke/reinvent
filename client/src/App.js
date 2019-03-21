import React, { Component } from "react";
import CampaignDisplay from "./components/CampaignDisplay";
import CampaignForm from "./components/CampaignForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CampaignDisplay />
        <CampaignForm />
      </div>
    );
  }
}

export default App;
