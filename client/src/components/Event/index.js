import React from "react";

const Event = ({event}) => (
    <div data-tip data-event="click focus" data-for={event._id}>{event.title}</div>
);

export default Event;