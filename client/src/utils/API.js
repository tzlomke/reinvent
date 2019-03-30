import axios from 'axios';

export default {
  // Get User Data
  getUser: (username) => {
    console.log(username);
    return axios.get('/api/profile/' + username);
  },
  // Post a campaign
  campaignPost: (campaign) => {
    return axios.post('/api/campaign', campaign);
  },
  // Get all campaigns
  campaignGet: (id) => {
    return axios.get('/api/campaign', {params: {id: id}});
  },
  // get active campaigns
  activeCampaignGet: () => {
    return axios.get("/api/campaign/active");
  },
  // get closed campaigns
  closedCampaignGet: () => {
    return axios.get("/api/campaign/closed")
  },
  // update campaigns
  campaignPut: (id, campaignUpdate) => {
    return axios.put('/api/campaign/' + id, campaignUpdate)
  },
  // Post discussions
  discussionPost: (discussion) => {
    const { author, body } = discussion;
    const uploadDiscuss = { author, body }
    return axios.put(`/api/campaign/discussion/${discussion.id}`, uploadDiscuss);
  },
  // Gets all votes
  getVotes: function () {
    return axios.get("/api/vote");
  },
  // Gets the vote with the given id
  getvote: function (id) {
      return axios.get("/api/vote/" + id);
  },
  discussionGet: () => {
    return axios.get('/api/discussion');
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
  },
  // Load News Articles Feed
  getArticles: function() {
    console.log("im here");
    return axios.get("/api/news-feed");
  }
  // // Gets an article with the given id
  // getArticle: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // // Deletes the artile with the given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // // Saves an article to the database
  // saveArticle: function(id, articlesData) {
  // return axios.post("/api/articles/" + id, articlesData);
  // } 
};