import React, {Component} from 'react';
import API from '../../utils/API';
import DiscussionDisplay from '../DiscussionDisplay';

class DiscussionForm extends Component {

  state = {
    titleInput: '',
    authorInput: '',
    discussionInputArea: '',
    campaignsFromDB: [],
    discussionsForCampaign: []
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const discussionForm = document.getElementById('newDiscussion');
    API.discussionPost({
      // This is hard coded fix!!!
      id: '5c959797c7735834e087a0df',
      subject: this.state.titleInput,
      author: this.state.authorInput,
      body: this.state.discussInputArea})
      .then(response => {
        (console.log(response.status));
      });
    this.setState({
      titleInput: '',
      authorInput: '',
      discussionInputArea: ''
    });
    discussionForm.reset();
    // this.loadCampaigns();
  };

  handleCampaignClick = (event) => {
    const id = event.target.dataset.id;
    this.state.campaignsFromDB.map(element => {
      if(element._id === id) {
        console.log(element);
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  // TODO make this so that it is tied to whatever campaign ID we are in
  loadDiscussion = () => {
    // This is hard coded fix!!!
    API.campaignGet('5c959797c7735834e087a0df')
      .then(response => {
        // This is just about there, we just need to post the results
        this.setState({ discussionsForCampaign: response.data[0].comments });
      });
  };

  componentDidMount = () => {
    this.loadDiscussion();
  };
  

  render() {
    return(
      <div>
        <header>Discussion</header>
          <section id="discussionEntry">
            <form id="newDiscussion">
              <section id="newDiscTitle">
                <label htmlFor="discTitleIt">Title</label>
                <input type="text" id="discTitleIt" name="titleInput" value={this.state.value} onChange={this.handleChange}></input>
              </section>
              <section id="newDiscAuthor">
                <label htmlFor="authorDiscIt">Author</label>
                <input type="text" id="authorDiscIt" name="authorInput" value={this.state.value} onChange={this.handleChange}></input>
              </section>
              <section id="newCampSynop">
                <label htmlFor="discussIt">New Discussion Here</label>
                <textarea id="discussIt" name="discussInputArea" value={this.state.value} onChange={this.handleChange}></textarea>
              </section>
                <button id="submitDiscussion" type="submit" onClick = {this.handleFormSubmit}>Submit</button>
              </form>
            </section>
            <header>New Discussion</header>
          {this.state.discussionsForCampaign.map((discussion) => {
            return(
              <DiscussionDisplay 
                onClick = {this.handleCampaignClick}
                key = {discussion._id}
                title={discussion.subject}
                author={discussion.author}
                synopsis={discussion.body} />
            )
          })}
      </div>
    );
  };
};

export default DiscussionForm;