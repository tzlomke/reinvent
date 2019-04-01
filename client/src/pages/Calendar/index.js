import React, {Component} from "react";
import MyCalendar from "../../components/MyCalendar";
import EventForm from "../../components/EventForm";
import API from "../../utils/API";
import ReactTooltip from 'react-tooltip';
import moment from "moment";
import "./style.css"


class Calendar extends Component {
    state = {
        eventTitle: "",
        startDate: new Date(),
        endDate: new Date (),
        eventDescription: "",
        events: []
    };

    startChange = date => this.setState({ startDate: date });

    endChange =  date => this.setState({ endDate: date });

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value 
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const eventForm = document.getElementById('eventForm');
        API.createEvent({
            title: this.state.eventTitle,
            start: this.state.startDate,
            end: this.state.endDate,
            description: this.state.eventDescription
        })
        .then(response => {
            (console.log(`You successfully uploaded: ${response.data.title}`));
            this.loadEvents();
        });
        this.setState({
            eventTitle: "",
            startDate: new Date(),
            endDate: new Date (),
            eventDescription: ""
        })
        eventForm.reset();
    };

    loadEvents = () => {
        API.getEvents()
        .then(res => this.setState({ events: res.data }));
    };

    componentDidMount = () => {
        this.loadEvents();
        window.$('.modal').modal();
        
    };

    componentDidUpdate = () => {
        setTimeout(() => {
            ReactTooltip.rebuild();
        }, 500)
    };

    onView = () => {
        setTimeout(() => {
            ReactTooltip.rebuild();
        }, 500)
    };

    onShowMore = () => {
        setTimeout(() => {
            ReactTooltip.rebuild();
        }, 500)
    }

    render = () => (
        <div className="container">
            <button data-target="eventFormModal" className="btn modal-trigger">Add an Event</button>
            <EventForm
            eventTitle={this.state.eventTitle}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            eventDescription={this.state.eventDescription}
            startChange={this.startChange}
            endChange={this.endChange}
            handleChange={this.handleChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <div id="calendarDisplay">
                <MyCalendar
                onShowMore={this.onShowMore}
                events={this.state.events}
                onView={this.onView}/>
            </div>
            {this.state.events.map(event =>(
                <ReactTooltip 
                key={event._id}
                id={event._id}
                globalEventOff="click"
                effect="solid"
                >
                    <span>{event.title}</span>
                    <br></br>
                    <span>{moment(event.start).format("h:mm A")}-{moment(event.end).format("h:mm A")}</span>
                    <br></br>
                    <span>{event.description}</span>
                </ReactTooltip>
            ))}
        </div>
    );
};

export default Calendar;