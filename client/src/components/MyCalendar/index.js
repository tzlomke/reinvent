import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import Event from "../Event"
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

const MyCalendar = props => (
    <BigCalendar
    onView={props.rebuildTooltip}
    onShowMore={props.rebuildTooltip}
    onNavigate={props.rebuildTooltip}
    popup={true}
    localizer={localizer}
    events={props.events}
    startAccessor={(event) => new Date(event.start)}
    endAccessor={(event) => new Date(event.end)}
    components={{event: Event}}
    />
);

export default MyCalendar
