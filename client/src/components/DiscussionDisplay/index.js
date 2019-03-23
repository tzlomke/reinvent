import React from 'react';
// import API from '../utils/API';

const DiscussionDisplay = (props) => {
  const { title, author, synopsis } = props;
  return(
      <section className="discussionDisplay">
        <h2>Subject: {title}</h2>
        <h3>Author: {author}</h3>
        <p>{synopsis}</p>
      </section>
  );
};

export default DiscussionDisplay;