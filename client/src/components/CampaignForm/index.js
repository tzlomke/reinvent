import React from 'react';
import './CampaignForm.css';

function CampaignForm(props)  {
  console.log(props)

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
                <button id="submitCampaign" type="submit" className="btn btn-dark modal-close" onClick = {props.handleFormSubmit}>Submit</button>
              </form>
            </section>
      </div>
    );
};

export default CampaignForm;