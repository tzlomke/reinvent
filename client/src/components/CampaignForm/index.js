import React from 'react';

function CampaignForm(props)  {

    return(
      <div className= "modal" id="campaignFormModal">
        <header>Campaign</header>
          <section id="campaignEntry">
            <form id="newCampaign">
              <section id="newCampTitle">
                <label htmlFor="titleIt">Title</label>
                <input type="text" id="titleIt" name="titleInput" value={props.titleInput} onChange={props.handleChange}></input>
              </section>
              <section id="newCampAuthor">
                <label htmlFor="authorIt">Author</label>
                <input type="text" id="authorIt" name="authorInput" value={props.authorInput} onChange={props.handleChange}></input>
              </section>
              <section id="newCampSynop">
                <label htmlFor="campaignIt">New Campaign Here</label>
                <textarea id="campaignIt" name="campaignInputArea" value={props.campaignInput} onChange={props.handleChange}></textarea>
              </section>
                <button id="submitCampaign" type="submit" className="modal-close" onClick = {props.handleFormSubmit}>Submit</button>
              </form>
            </section>
      </div>
    );
};

export default CampaignForm;