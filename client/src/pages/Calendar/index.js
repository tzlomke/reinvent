import React, {Component} from "react";
import MyCalendar from "../../components/MyCalendar";
import EventForm from "../../components/EventForm";
import DateTimePicker from 'react-datetime-picker';
import "./style.css"

class Calendar extends Component {
    state = {
        eventTitle = "",
        startDate = new Date(),
        endDate = new Date (),
        eventDescription ="",
    }
    render = () => (
        <div className="container">
            <EventForm/>
            <div id="calendarDisplay">
                <MyCalendar/>
            </div>
        </div>
    );
};

export default Calendar;