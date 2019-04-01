import React, {Component} from "react";
// import CampaignForm from "../../components/CampaignForm";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ClosedVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: "",
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
    API.closedCampaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
        console.log(response.data);
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    voteAPI.updateVote(this.voteId, data).then(res =>{
        console.log(res.data);
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

  componentDidMount = () => {
    this.loadCampaigns();
  };

  render(){
    return (
      <div>
        {this.state.campaignsFromDB.map(campaign =>
          campaign.map(campaign => (
            campaign.vote.length  !== 0 ? (
              console.log(campaign.vote[0]._id),
              <CampaignDisplay
              handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
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
    )
  }
}

ClosedVoteIdeas.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  	auth: state.auth
});

export default connect(mapStateToProps)(ClosedVoteIdeas);