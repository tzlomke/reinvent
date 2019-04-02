import React, {Component} from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import DiscussionForm from '../../components/DiscussionForm';
// import DiscussionDisplay from "../../components/DiscussionDisplay";
import { Col, Row, Container } from "../../components/Grid";
import { Title, SubTitle } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";

class TrendingVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: '',
  }

  voteId="";
  campaignId="";

  loadUser = () => {
    let authenticatedUserId = this.props.auth.user.id
    console.log(this.props.auth.user.id);
		API.getUserById(authenticatedUserId)
			.then(response => {
        let userData = response.data[0]
        console.log(userData);
				this.setState({
					userId: userData._id,
					discussionAuthorInput: `${userData.username}`,
				});
			});
	};

  loadCampaigns = () => {
    const campaignArray = [];
    API.trendingCampaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    voteAPI.updateVote(this.voteId, data).then(res =>{
        return res.data;
    })),1)
  };

  onCreate = (data) =>  {
    setTimeout(() =>{
      data.campaign =[this.campaignId];
      voteAPI.saveVote(data).then(res => {
          console.log(res.data._id);
          console.log(res.data);
          API.campaignPut(this.campaignId, {vote: res.data._id})
          .then(res=>console.log(res.data))
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
    console.log(this.voteId, this.campaignId);
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
    API.discussionPost({
      id: this.state.campaignClicked._id,
      author: this.state.discussionAuthorInput,
      body: this.state.discussInputArea})
      .then(response => {
        (console.log(response.status));
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

  unFocusCampaign = () => {
    this.loadCampaigns();
    this.setState({ campaignExpand: false });
  };

  render(){
    const campaignsFromDB = this.state.campaignsFromDB;
    return (
      <div>
        <SubTitle 
          subTitleText="Trending Ideas"
        />
        <CardOutline
          colSize={ "12" } 
          cardColor={ "" }
          cardTextColor={ "" }
        >
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
                  clientId={this.state.userId}
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
                  clientId={this.state.userId}
                  />
                )
              ))
            )}
          </div>
        </CardOutline>
      </div>
    )
  }
}

TrendingVoteIdeas.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(TrendingVoteIdeas);