import React from 'react';
import './ResourcesForm.css';
import { StyleButton } from "../../components/StyleButton";


function CampaignForm(props)  {
    let buttonText;
    (function noEmptyForms() {
        const submitButton = document.getElementById('submitResource');
        if (submitButton === null) {
            return "User is on the Right Path"
        } else if (props.title === "" || props.link === "") {
            buttonText = "Please Enter all Information"
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
            buttonText = "Add Resource"
        };
    })();

    return(
        <div className= "modal" id="resourceFormModal">
            <header className ="header">New Resource</header>
            <section id="newResource">
                <form id="resourceForm">
                    <section id="resourceTitleSection">
                        <label htmlFor="resourceTitle">Title</label>
                        <input type="text" id="resourceTitle" name="title" value={props.title} onChange={props.handleInputChange}></input>
                    </section>
                    <section id="resourceLinkSection">
                        <label htmlFor="resourceLink">Link</label>
                        <input type="text" id="resourceLink" name="link" value={props.link} onChange={props.handleInputChange}></input>
                    </section>
                    {/* <section id="resourceCategorySection">
                        <label htmlFor="resourceCategory"></label>
                        <input type="text" id="resourceCategory" name="category" value={props.authorInput} onChange={props.handleChange}></input>
                    </section> */}
                    <StyleButton
                        btnTxt={buttonText}
                        id="submitResource"
                        onClick={props.handleFormSubmit}
                        modalClose= {true}
                    />
                </form>
            </section>
        </div>
    );
};

export default CampaignForm;