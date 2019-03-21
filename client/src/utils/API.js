import axios from 'axios';

export default {
  campaignPost: (campaign) => {
    return axios.post('/api/campaign', campaign);
  },
  campaignGet: () => {
    return axios.get('/api/campaign');
  }
};