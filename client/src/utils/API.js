import axios from 'axios';

export default {
  campaignPost: (campaign) => {
    return axios.post('/api/campaign', campaign);
  },
  campaignGet: () => {
    return axios.get('/api/campaign');
  },
  discussionPost: (discussion) => {
    return axios.post('/api/discussion', discussion);
  },
  discussionGet: () => {
    return axios.get('/api/discussion');
  }
};