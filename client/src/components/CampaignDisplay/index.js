import React from 'react';
// import API from '../utils/API';

const CampaignDisplay = (props) => {
  const { title, author, synopsis } = props;
  return(
    <div>
      <header>New Campaigns</header>
      <section id="campaignDisplay">
        <h2>Title: {title}</h2>
        <h3>Author: {author}</h3>
        <p>{synopsis}</p>
      </section>
    </div>
  );
};

export default CampaignDisplay;