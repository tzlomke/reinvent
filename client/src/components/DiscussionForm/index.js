import React from 'react';

const DiscussionForm = ({ discussionSubmit, discussionFormChange, discussionAuthorInput, discussInputArea }) => {
  return(
    <div>
      <header>Discussion</header>
        <section id="discussionEntry">
          <form id="newDiscussion">
            <section id="newDiscAuthor">
              <label htmlFor="authorDiscIt">Author</label>
              <h6 id="authorDiscIt" name="discussionAuthorInput">{discussionAuthorInput}</h6>
            </section>
            <section id="newCampSynop">
              <label htmlFor="discussIt">New Discussion Here</label>
              <textarea id="discussIt" name="discussInputArea" value={discussInputArea} onChange={discussionFormChange}></textarea>
            </section>
              <button id="submitDiscussion" type="submit" onClick = {discussionSubmit}>Submit</button>
            </form>
          </section>
    </div>
  );
};

export default DiscussionForm;