import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment)
const EventsList = [
    {   id: "1",
        start: "03/29/2019 03:00 pm",
        end:"3/29/2019 04:00 pm ",
        title: "test event 1"

        
    },
    {
        id: "2",
        start: "2019-03-28T12:00",
        end: "2019-03-28T24:00",
        title: "test event 2"
    }

];

const MyCalendar = props => (
    <BigCalendar
    localizer={localizer}
    events={EventsList}
    startAccessor="start"
    endAccessor="end"
    />
)
export default MyCalendar
