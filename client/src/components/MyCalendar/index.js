import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
    <BigCalendar
    localizer={localizer}
    events={props.events}
    startAccessor="start"
    endAccessor="end"
    />
);

export default MyCalendar