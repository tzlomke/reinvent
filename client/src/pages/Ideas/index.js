import React, {Component} from "react";
import IdeasNavBar from "../../components/IdeasNavBar";
import API from "../../utils/API";
import ActiveVoteIdeas from "../ActiveVoteIdeas";
import ClosedVoteIdeas from "../ClosedVoteIdeas"
import PrivateRoute from "../../components/private-route/PrivateRoute";
import CampaignForm from "../../components/CampaignForm";

class Ideas extends Component {

  state = {
    titleInput: '',
    authorInput: '',
    campaignInputArea: '',
    userId: "1",
    campaignExpand: false,
    focusedCampaign: {}
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const campaignForm = document.getElementById('newCampaign');
    API.campaignPost({
      title: this.state.titleInput,
      author: this.state.authorInput,
      synopsis: this.state.campaignInputArea})
      .then(response => {
        (console.log(`You successfully uploaded: ${response.data.title}`));
      });
    this.setState({
      titleInput: '',
      authorInput: '',
      campaignInputArea: ''
    });
    campaignForm.reset();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  componentDidMount = () => {
    window.$('.modal').modal();
  };

  render(){ 
    return (
      <div>
        <IdeasNavBar/>
        <CampaignForm
          titleInput={this.state.titleInput}
          authorInput={this.state.authorInput}
          campaignInput={this.state.campaignInputArea}
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}/>
        <PrivateRoute exact path="/ideas/active" component={ActiveVoteIdeas} />
				<PrivateRoute exact path="/ideas/closed" component={ClosedVoteIdeas} />
      </div>
    )
  }
}

export default Ideas;