import React from 'react';
import { StyleButton } from "../../components/StyleButton";
import './DiscussionForm.css';

const DiscussionForm = ({ discussionSubmit, discussionFormChange, discussionAuthorInput, discussInputArea }) => {
  let buttonText;
  (function noEmptyForms() {
    const submitButton = document.getElementById('submitDiscussion');
    if (submitButton === null) {
      return "Waiting for button"
    } else if (discussInputArea === "") {
      buttonText = "Please Enter all Information"
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
      buttonText = "Post"
    };
  })();

  return(
    <div>
      <hr />
      <h4>Add to Discussion</h4>
        <section id="discussionEntry">
          <form id="newDiscussion">
            <section id="newDiscAuthor">
              <label htmlFor="authorDiscIt">post as: </label>
              <h5 id="authorDiscIt" name="discussionAuthorInput">{discussionAuthorInput}</h5>
            </section>
            <section id="newCampSynop">
              <label htmlFor="discussIt">Ad to Discussion</label>
              <textarea id="discussIt" name="discussInputArea" value={discussInputArea} onChange={discussionFormChange}></textarea>
            </section>
              <StyleButton
                btnTxt={buttonText}
                id="submitDiscussion"
                onClick={discussionSubmit}
              />
            </form>
          </section>
    </div>
  );
};

export default DiscussionForm;