import React, { Component } from "react";
import CampaignDisplay from "./components/CampaignDisplay";
import CampaignForm from "./components/CampaignForm";
import UserProfile from "./components/UserProfile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CampaignDisplay />
        <CampaignForm />
        <UserProfile />
      </div>
    );
  }
}

export default App;
