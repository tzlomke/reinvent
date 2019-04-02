import React, { Component } from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import { SubTitle } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import DiscussionDisplay from "../../components/DiscussionDisplay";
import DiscussionForm from "../../components/DiscussionDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class IdeaDiscussion extends Component {

  state = {
    userId: '',
    authorInput: '',
    campaignClicked: {},
    discussionAuthorInput: '',
    discussInputArea: ''
  }

  loadUser = () => {
    let authenticatedUserId = this.props.auth.user.id
		API.getUserById(authenticatedUserId)
			.then(response => {
        let userData = response.data[0]
        this.loadCampaign(userData);
        return this.state.discussionAuthorInput;
      });
	};

  loadCampaign = (userData) => {
    const urlSplit = window.location.href.split('/');
    const campaignId = urlSplit[4];
    API.campaignGet(campaignId)
      .then(response => {
        const resDat = response.data[0];
        this.setState({
          campaignClicked: resDat,
          userId: userData._id,
          discussionAuthorInput: userData.username 
        });
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    voteAPI.updateVote(this.voteId, data).then(res =>{
      return res.data;
        return res.data;
    })),1)
  };

  onCreate = (data) =>  {
    setTimeout(() =>{
      data.campaign =[this.campaignId];
      voteAPI.saveVote(data).then(res => {
          API.campaignPut(this.campaignId, {vote: res.data._id})
          .then(res=> res.data)
      });
    },1);
  };

  onUpvote = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onDownvote = (data, voteId) => {
    this.updateVote(data, voteId);
  };  

  onClose = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onReset = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onExpand = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onEdit = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  handleData = (voteId, campaignId) => {
    this.voteId = voteId;
    this.campaignId = campaignId;
    return voteId,campaignId;
  };

  componentDidMount = () => {
    this.loadUser();
  };

  handleDiscussionSubmit = (event) => {
    event.preventDefault()
    const discussionForm = document.getElementById('newDiscussion');
    API.discussionPost({
      id: this.state.campaignClicked._id,
      author: this.state.discussionAuthorInput,
      body: this.state.discussInputArea})
      .then(response => {
        return response.status;
      });
    this.setState({
      discussionAuthorInput: '',
      discussInputArea: ''
    });
    discussionForm.reset();
    this.campaignExpand(this.state.campaignClicked._id);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  render () {
    const campaignClicked = this.state.campaignClicked;
    console.log(campaignClicked.vote === undefined || []);
    return (
      <div>
        <SubTitle 
          subTitleText="Discuss the Idea"
        />
        <CardOutline
          colSize={ "12" } 
          cardColor={ "" }
          cardTextColor={ "" }
        >
          <div>
            <a href="/ideas/active">Back</a>
            {campaignClicked.vote === undefined ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              campaignClicked.vote.length  !== 0 ? (
                <div>
                  <p>vote</p>
                  <CampaignDisplay
                  handleData={()=>this.handleData(campaignClicked.vote[0]._id, campaignClicked._id)}
                  data={campaignClicked.vote}
                  title={campaignClicked.title}
                  author={campaignClicked.author}
                  synopsis={campaignClicked.synopsis}
                  key={campaignClicked._id}
                  styles={{opacity:1}}
                  // text={customText}
                  onCreate={this.onCreate}
                  onUpvote={this.onUpvote}
                  onClose={this.onClose}
                  onReset={this.onReset}
                  onDownvote={this.onDownvote}
                  onExpand={this.onExpand}
                  onEdit={this.onEdit}
                  isAdmin={true}
                  clientId={this.state.userId}
                  />
                  {campaignClicked.comments.map((discussion, index) => 
                  <DiscussionDisplay
                  key={index}
                  discussionData={discussion}
                  />
                  )}
                <DiscussionForm 
                discussionSubmit={this.handleDiscussionSubmit}
                discussionFormChange={this.handleChange}
                discussionTitleInput={this.state.discussionTitleInput}
                discussionAuthorInput={this.state.discussionAuthorInput}
                discussInputArea={this.state.discussInputArea}/>
              </div>
            ):(
              <div>
                <p>no vote</p>
                <CampaignDisplay
                // Commented out. I don't think we need this, and it causes errors since there is now vote on this discussion load
                handleData={()=>this.handleData(campaignClicked.vote[0]._id, campaignClicked._id)}
                data={campaignClicked.vote}
                title={campaignClicked.title}
                author={campaignClicked.author}
                synopsis={campaignClicked.synopsis}
                key={campaignClicked._id}
                styles={{opacity:1}}
                // text={customText}
                onCreate={this.onCreate}
                onUpvote={this.onUpvote}
                onClose={this.onClose}
                onReset={this.onReset}
                onDownvote={this.onDownvote}
                onExpand={this.onExpand}
                onEdit={this.onEdit}
                isAdmin={true}
                clientId={this.state.userId}
                />
                 {campaignClicked.comments.map((discussion, index) => 
                  <DiscussionDisplay
                  key={index}
                  discussionData={discussion}
                  />
                  )}
                  <DiscussionForm 
                  discussionSubmit={this.handleDiscussionSubmit}
                  discussionFormChange={this.handleChange}
                  discussionTitleInput={this.state.discussionTitleInput}
                  discussionAuthorInput={this.state.discussionAuthorInput}
                  discussInputArea={this.state.discussInputArea}/>
                </div>
              )
            )}
          </div>
        </CardOutline>
      </div>
    )
  }
};

IdeaDiscussion.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(IdeaDiscussion);