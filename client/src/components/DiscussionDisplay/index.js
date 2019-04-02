import React from 'react';
// import API from '../utils/API';

const DiscussionDisplay = ({ discussionData }) => {
  console.log(discussionData);
  // const { author, body } = discussionData;
  return(
      <section className="discussionDisplay">
      <p>discussion</p>
        {/* <h3>Author: {author}</h3>
        <p>{body}</p> */}
      </section>
  );
};

export default DiscussionDisplay;