import React, { Component } from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import { SubTitle } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import DiscussionDisplay from "../../components/DiscussionDisplay";
import DiscussionForm from "../../components/DiscussionForm";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Vote from "../../components/Vote"
import DeleteBtn from "../../components/DeleteBtn";
import { StyleButton, StyleLink } from "../../components/StyleButton";


class IdeaDiscussion extends Component {

  state = {
    userId: '',
    authorInput: '',
    campaignClicked: {},
    discussionAuthorInput: '',
    discussInputArea: '',
    inputAuthor: ""
  }

  voteId="";
  campaignId="";

  loadUser = () => {
    let authenticatedUserId = this.props.auth.user.id
		API.getUserById(authenticatedUserId)
			.then(response => {
        let userData = response.data[0]
        this.setState({
          userId: userData._id,
          discussionAuthorInput: userData.username,
          inputAuthor: `${userData.firstName} ${userData.lastName}`
        });
        return 'Complete!';
      });
	};

  loadCampaign = () => {
    const urlSplit = window.location.href.split('/');
    const campaignId = urlSplit[4];
    API.campaignGet(campaignId)
      .then(response => {
        if(response.data.name === "CastError") {
          window.location.pathname = "404"
        } else {
          const resDat = response.data[0];
          this.setState({
            campaignClicked: resDat
          });
        };
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    API.updateVote(this.voteId, data).then(res =>{
      return res.data;
    })),1)
  };

  onCreate = (data) =>  {
    setTimeout(() =>{
      data.campaign =[this.campaignId];
      API.saveVote(data)
        .then(res => {
          API.campaignPut(this.campaignId, {vote: res.data._id})
          .then(res=> res.data)
      });
    },1);
  };

  handleData = (voteId, campaignId) => {
    this.voteId = voteId;
    this.campaignId = campaignId;
    return (voteId, campaignId);
  };

  componentDidMount = () => {
    this.loadUser();
    this.loadCampaign();
  };

  handleDiscussionSubmit = (event) => {
    event.preventDefault()
    const discussionForm = document.getElementById('newDiscussion');
    API.discussionPost({
      id: this.state.campaignClicked._id,
      author: this.state.inputAuthor,
      userId: this.state.userId,
      body: this.state.discussInputArea})
      .then(response => {
        return response.status;
      });
    this.setState({
      discussInputArea: ''
    });
    discussionForm.reset();
    this.loadCampaign();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  deleteCampaign = () => {
    const urlSplit = window.location.href.split('/');
    const campaignId = urlSplit[4];
    API.campaignDelete(campaignId).then(window.location.assign("/ideas/active"));
  }

  render () {
    const campaignClicked = this.state.campaignClicked;
    console.log(campaignClicked)
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
            <StyleLink
              btnTxt="Back to Ideas"
              linkTo={"/ideas/active"}
            />
            <DeleteBtn onClick ={this.deleteCampaign}/>
            {campaignClicked.vote === undefined ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              campaignClicked.vote.length  !== 0 ? (
                <div>
                  <CampaignDisplay
                  campaignClickable={false}
                  handleData={() => {this.handleData(campaignClicked.vote[0]._id, campaignClicked._id)}}
                  title={campaignClicked.title}
                  author={campaignClicked.author}
                  synopsis={campaignClicked.synopsis}
                  key={campaignClicked._id}
                  >
                    <Vote
                    data={campaignClicked.vote}
                    onCreate={this.onCreate}
                    onUpvote={this.updateVote}
                    onClose={this.updateVote}
                    onReset={this.updateVote}
                    onDownvote={this.updateVote}
                    onExpand={this.updateVote}
                    onEdit={this.updateVote}
                    isAdmin={true}
                    clientId={this.state.userId}
                    />
                  </CampaignDisplay>
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
                <CampaignDisplay
                  campaignClickable={false}
                  handleData={() => {this.handleData(undefined, campaignClicked._id)}}
                  title={campaignClicked.title}
                  author={campaignClicked.author}
                  synopsis={campaignClicked.synopsis}
                  key={campaignClicked._id}
                  >
                    <Vote
                    data={campaignClicked.vote}
                    onCreate={this.onCreate}
                    onUpvote={this.updateVote}
                    onClose={this.updateVote}
                    onReset={this.updateVote}
                    onDownvote={this.updateVote}
                    onExpand={this.updateVote}
                    onEdit={this.updateVote}
                    isAdmin={true}
                    clientId={this.state.userId}
                    />
                  </CampaignDisplay>
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
                  discussionAuthorInput={this.state.inputAuthor}
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