import React from 'react';
// import API from '../utils/API';

const CampaignDisplay = (props) => {
  const { title, author, synopsis, onClick, campaignID } = props;
  return(
    <section id="campaignDisplay" onClick={onClick} data-id={campaignID}>
      <h2>Title: {title}</h2>
      <h3>Author: {author}</h3>
      <p>{synopsis}</p>
    </section>
  );
};

export default CampaignDisplay;