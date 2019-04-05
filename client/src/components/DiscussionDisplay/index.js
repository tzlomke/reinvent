import React from 'react';
import moment from 'moment';

// import API from '../utils/API';

const DiscussionDisplay = ({ discussionData }) => {
  const { author, body, timestamp } = discussionData;
  return(
      <section className="discussionDisplay">
        <hr />
        <h5>posted by: {author}</h5>
        <h6>on: { moment( timestamp ).format("MM-DD-YYYY") }</h6>
        <p>{body}</p>
      </section>
  );
};

export default DiscussionDisplay;