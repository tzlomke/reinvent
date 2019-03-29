import React, {Component} from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";
import DiscussionForm from '../../components/DiscussionForm';
import DiscussionDisplay from "../../components/DiscussionDisplay";

class ActiveVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: "1",
    campaignClicked: {},
    campaignExpand: false,
    discussionTitleInput: '',
    discussionAuthorInput: '',
    discussInputArea: ''
  }

  voteId="";
  campaignId="";

  loadCampaigns = () => {
    const campaignArray = [];
    API.activeCampaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
        // console.log(response.data);
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    console.log(this.voteId),
    console.log(data),
    voteAPI.updateVote(this.voteId, data).then(res =>{
        console.log(res.data);
    })),1
    )
};

  onCreate = (data) =>  {
    voteAPI.saveVote(data).then(res => {
        console.log(res.data._id);
        console.log(res.data);
        API.campaignPut(this.campaignId, {vote: res.data._id})
        .then(res=>console.log(res.data))
    });
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
    // console.log(this.voteId, this.campaignId);
  };

  // Getting closer, but needs more work
  campaignExpand = (campaignId) => {
    API.campaignGet(campaignId)
      .then(response => {
        const resDat = response.data[0];
        this.setState({ campaignClicked: resDat, campaignExpand: true });
      });
  };

  componentDidMount = () => {
    this.loadCampaigns();
  };

  // All the discussion stuff

  handleDiscussionSubmit = (event) => {
    event.preventDefault()
    const discussionForm = document.getElementById('newDiscussion');
    console.log(discussionForm);
  //   API.discussionPost({
  //     // This is hard coded fix!!!
  //     id: '5c96800a1b842f0d9897a508',
  //     subject: this.state.titleInput,
  //     author: this.state.authorInput,
  //     body: this.state.discussInputArea})
  //     .then(response => {
  //       (console.log(response.status));
  //     });
    this.setState({
      titleInput: '',
      authorInput: '',
      discussionInputArea: ''
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

  unFocusCampaign = () => {
    this.setState({ campaignExpand: false });
  };

  render(){
    const campaignsFromDB = this.state.campaignsFromDB;
    const campaignClicked = this.state.campaignClicked;
    return (
      !this.state.campaignExpand ? (
        <div>
          {campaignsFromDB.map(campaign =>
            campaign.map(campaign => (
              campaign.vote.length  !== 0 ? (
                console.log(campaign.vote[0]._id),
                <CampaignDisplay
                handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
                campaignExpand={() => this.campaignExpand(campaign._id)}
                data={campaign.vote}
                title={campaign.title}
                author={campaign.author}
                synopsis={campaign.synopsis}
                key={campaign._id}
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
                clientId={"1"}
                />
              ):(
                <CampaignDisplay
                handleData={()=>this.handleData(campaign.vote._id, campaign._id)}
                campaignExpand={() => this.campaignExpand(campaign._id)}
                data={campaign.vote}
                title={campaign.title}
                author={campaign.author}
                synopsis={campaign.synopsis}
                key={campaign._id}
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
                clientId={"1"}
                />
              ) 
            ))
          )}
        </div>
      ) : (
        <div>
          {campaignClicked.vote.length  > 1 ? (
            console.log('campaign it' + campaignClicked.vote[0]._id),
            <CampaignDisplay
            // handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
            // campaignExpand={() => this.campaignExpand(campaign._id)}
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
            clientId={"1"}
            />
          ):(
            <div>
              <button onClick={this.unFocusCampaign}>Back</button>
              <CampaignDisplay
              // handleData={()=>this.handleData(campaign.vote._id, campaign._id)}
              // campaignExpand={() => this.campaignExpand(campaign._id)}
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
              clientId={"1"}
              />
              <DiscussionForm 
              discussionSubmit={this.handleDiscussionSubmit}
              discussionFormChange={this.handleChange}
              discussionTitleInput={this.state.discussionTitleInput}
              discussionAuthorInput={this.state.discussionAuthorInput}
              discussInputArea={this.state.discussInputArea}/>
              {campaignClicked.comments.map((discussion, index) => 
                <DiscussionDisplay
                key={index}
                discussionData={discussion}
                />
              )}
            </div>
          )}
        </div>
      )
    )
  }
}

export default ActiveVoteIdeas;