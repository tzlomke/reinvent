import axios from 'axios';

export default {
  campaignPost: (campaign) => {
    return axios.post('/campaign', campaign);
  },
  campaignGet: () => {
    return axios.get('/campaign');
  }
};