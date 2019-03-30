import axios from 'axios';

export default {
  // Get User Data
  getUserByUsername: (username) => {
    console.log(username);
    return axios.get('/api/profile/' + username);
  },
  getUserById: (userId) => {
    console.log(userId);
    return axios.get('/api/profile/find/' + userId);
  },
  // Post Profile Image
  profileImageUpload: (username) => {
    console.log(username);
    return axios.post('/api/:username/profile-image-upload');
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
  },
  // create an event
  createEvent: (eventData) => {
    return axios.post("/api/event", eventData);
  },
  // gets all events
  getEvents: () => {
    return axios.get("/api/event");
  },

  // create a resource
  createResource: (resourceData) => {
    return axios.post("/api/resource", resourceData);
  },

  // gets all resources
  getResources: () => {
    return axios.get("/api/resource");
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