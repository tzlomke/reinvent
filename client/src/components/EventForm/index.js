import React from 'react';
import DateTimePicker from 'react-datetime-picker';

function EventForm (props)  {
    return(
        <div className="" id="eventFormModal">
            <header>New Event</header>
            <section id="eventFormSection">
                <form id="eventForm">
                    <section id="eventTitleSection">
                        <label htmlFor="eventTitle">Title</label>
                        <input type="text" id="eventTitle" name="ttleInput" value={props.titleInput} onChange={props.handleChange}></input>
                    </section>
                    <section id="startDateTimeSection">
                        <label htmlFor="startDateTime">Start Date and Time</label>
                        <DateTimePicker id="startDateTime"/>
                    </section>
                    <section id="startDateTimeSection">
                        <label htmlFor="startDateTime">End Date and Time</label>
                        <DateTimePicker id="startDateTime"/>
                    </section>
                    <section id="eventDescriptionSection">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea id="eventDescription" name="eventDescriptionInput" value={props.campaignInput} onChange={props.handleChange}></textarea>
                    </section>
                    <button id="submitEvent" type="submit" className="modal-close" onClick = {props.handleFormSubmit}>Submit</button>
                </form>
            </section>
        </div>
    );
};

export default EventForm;