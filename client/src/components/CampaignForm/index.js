import React from 'react';
import './CampaignForm.css';
import { StyleButton } from "../../components/StyleButton";

function CampaignForm(props)  {
  let buttonText;
  (function noEmptyForms() {
    const submitButton = document.getElementById('submitCampaign');
    if (submitButton === null) {
      return "User is on the Right Path"
    } else if (props.titleInput === "" || props.campaignInput === "") {
      buttonText = "Please Enter all Information"
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
      buttonText = "Add Idea"
    };
  })();

    return(
      <div className= "modal" id="campaignFormModal">
        <header className ="header">New Idea</header>
          <section id="campaignEntry">
            <form id="newCampaign">
              <section id="newCampTitle">
                <label htmlFor="titleIt">Title</label>
                <input type="text" id="titleIt" name="titleInput" value={props.titleInput} onChange={props.handleChange}></input>
              </section>
              <section id="newCampAuthor">
                <h6 id="authorIt" name="authorInput">{props.authorInput}</h6>
              </section>
              <section id="newCampSynop">
                <label htmlFor="campaignIt">New Idea Here</label>
                <textarea id="campaignIt" name="campaignInputArea" value={props.campaignInput} onChange={props.handleChange}></textarea>
              </section>
                <StyleButton 
                  type={"submit"}
                  id={"submitCampaign"}
                  onClick={props.handleFormSubmit}
                  btnTxt={buttonText}
                />
              </form>
            </section>
      </div>
    );
};

export default CampaignForm;