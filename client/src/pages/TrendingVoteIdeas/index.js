import React, {Component} from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import Vote from "../../components/Vote";

class TrendingVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: '',
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
          API.campaignPut(this.campaignId, {vote: res.data._id})
          .then(res=>console.log(res.data))
      });
    },1);
  };

  handleData = (voteId, campaignId) => {
    this.voteId = voteId;
    this.campaignId = campaignId;
    console.log(this.voteId, this.campaignId);
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
        <Title 
          titleText="Trending Ideas"
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
                  <CampaignDisplay
                    campaignClickable={true}
                    handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
                    title={campaign.title}
                    author={campaign.author}
                    synopsis={campaign.synopsis}
                    key={campaign._id}
                    id={campaign._id}
                  >
                    <Vote
                      onCreate={this.onCreate}
                      onUpvote={this.updateVote}
                      onClose={this.updateVote}
                      onReset={this.updateVote}
                      onDownvote={this.updateVote}
                      onExpand={this.updateVote}
                      onEdit={this.updateVote}
                      isAdmin={true}
                      clientId={this.state.userId}
                      data={campaign.vote}
                    />
                </CampaignDisplay>
                ):(
                  <CampaignDisplay
                  campaignClickable={true}
                  handleData={()=>this.handleData(campaign.vote._id, campaign._id)}
                  data={campaign.vote}
                  title={campaign.title}
                  author={campaign.author}
                  synopsis={campaign.synopsis}
                  key={campaign._id}
                  id={campaign._id}
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