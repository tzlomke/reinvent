import axios from 'axios';

export default {
  // Post a campaign
  campaignPost: (campaign) => {
    return axios.post('/api/campaign', campaign);
  },
  // Get all campaigns
  campaignGet: (id) => {
    return axios.get('/api/campaign', {params: {id: id}});
  },
  // Post discussions
  discussionPost: (discussion) => {
    return axios.post('/api/campaign/discussion', discussion);
  },
  // Gets all votes
  getVotes: function () {
    return axios.get("/api/vote");
  },
  // Gets the vote with the given id
  getvote: function (id) {
      return axios.get("/api/vote/" + id);
  },
  // Deletes the vote with the given id
  deleteVote: function (id) {
      return axios.delete("/api/vote/" + id);
  },
  // Saves a vote to the database
  saveVote: function (voteData) {
      return axios.post("/api/vote", voteData);
  },
  // updates a vote
  updateVote: function (id, voteData) {
      return axios.put("/api/vote/" + id, voteData);
  }
};