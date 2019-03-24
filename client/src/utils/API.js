import axios from 'axios';

export default {
  campaignPost: (campaign) => {
    return axios.post('/api/campaign', campaign);
  },
  campaignGet: () => {
    return axios.get('/api/campaign');
  },
  campaignPut: (id, campaignUpdate) => {
    return axios.put('/api/campaign/' + id, campaignUpdate)
  },
  discussionPost: (discussion) => {
    return axios.post('/api/discussion', discussion);
  },
  discussionGet: () => {
    return axios.get('/api/discussion');
  },
  // Gets all votes
  getVotes: function () {
    return axios.get("/api/vote");
  },
  // Gets the vote with the given id
  getVote: function (id) {
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