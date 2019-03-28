import React, {Component} from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";

class ActiveVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: "1",
  }

  voteId="";
  campaignId="";

  loadCampaigns = () => {
    const campaignArray = [];
    API.activeCampaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
        console.log(response.data);
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
              clientId={"1"}
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

export default ActiveVoteIdeas;