import React from 'react';
import moment from 'moment';
import "./style.css";

// import API from '../utils/API';

const DiscussionDisplay = ({ discussionData }) => {
  const { author, body, date } = discussionData;
  return(
      <section className="discussionDisplay">
        <hr />
        <h5>posted by: {author}</h5>
        <h6>on: { moment( date ).format("MM-DD-YYYY, h:mm:ss a") }</h6>
        <br />
        <p className="preThis">{body}</p>
      </section>
  );
};

export default DiscussionDisplay;