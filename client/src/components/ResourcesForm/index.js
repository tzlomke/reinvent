import React from 'react';

function CampaignForm(props)  {
    return(
        <div className= "modal" id="resourceFormModal">
            <header>New Resource</header>
            <section id="newResource">
                <form id="resourceForm">
                    <section id="resourceTitleSection">
                        <label htmlFor="resourceTitle">Title</label>
                        <input type="text" id="resoureTitle" name="title" value={props.titleInput} onChange={props.handleChange}></input>
                    </section>
                    <section id="resourceLinkSection">
                        <label htmlFor="resourceLink">Link</label>
                        <input type="text" id="resourceLink" name="link" value={props.authorInput} onChange={props.handleChange}></input>
                    </section>
                    <section id="resourceCategorySection">
                        <label htmlFor="resourceCategory">New Campaign Here</label>
                        <input type="text" id="resourceCategory" name="category" value={props.authorInput} onChange={props.handleChange}></input>
                    </section>
                    <button id="submitResource" type="submit" className="modal-close" onClick = {props.handleFormSubmit}>Add Resource</button>
                </form>
            </section>
        </div>
    );
};

export default CampaignForm;