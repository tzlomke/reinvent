import React, {Component} from "react";
import MyCalendar from "../../components/MyCalendar";
import EventForm from "../../components/EventForm";
import API from "../../utils/API";
import ReactTooltip from 'react-tooltip';
import moment from "moment";
import "./style.css"
import { Container } from "../../components/Grid";
import { Title } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import DeleteBtn from "../../components/DeleteBtn";
import { StyleButton, StyleLink } from "../../components/StyleButton";

class Calendar extends Component {
    state = {
        eventTitle: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        eventDescription: "",
        events: []
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log("change")
        this.setState({ 
            [name]: value 
        });
    };

    onSelect = (dateTime) =>{
        console.log(dateTime)
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const eventForm = document.getElementById('eventForm');
        API.createEvent({
            title: this.state.eventTitle,
            start: "" + this.state.startDate + " " + this.state.startTime + "",
            end: "" + this.state.endDate + " " + this.state.endTime+ "",
            description: this.state.eventDescription
        })
        .then(response => {
            (console.log(`You successfully uploaded: ${response.data.title}`));
            this.loadEvents();
        });
        this.setState({
            eventTitle: "",
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            eventDescription: ""
        })
        eventForm.reset();
    };

    loadEvents = () => {
        API.getEvents()
        .then(res => {this.setState({ events: res.data })
        console.log(res.data)
        })
        
    };

    componentDidMount = () => {
        this.loadEvents();

        window.$('.modal').modal({
            onOpenEnd:()=>{
                window.$('.startdatepicker').datepicker({
                    onSelect:(date)=>(this.setState({startDate: moment(date).format("MM-DD-YYYY")}))
                });
                window.$('.enddatepicker').datepicker({
                    onSelect:(date)=>(this.setState({endDate: moment(date).format("MM-DD-YYYY")}))
                });
                window.$('.starttimepicker').timepicker({
                    onSelect:(hours, mins)=>{
                        if ( hours.toString().length === 1 ) {
                            hours = "0" + hours;
                        };
                        if ( mins.toString().length === 1 ) {
                            mins = "0" + mins;
                        };
                        const time = hours + ":" + mins
                        this.setState({startTime: time})
                    },
                    twelveHour: false
                });
                window.$('.endtimepicker').timepicker({
                    onSelect:(hours, mins)=>{
                        if ( hours.toString().length === 1 ) {
                            hours = "0" + hours;
                        };
                        if ( mins.toString().length === 1 ) {
                            mins = "0" + mins;
                        };
                        const time = hours + ":" + mins
                        this.setState({endTime: time})
                    },
                    twelveHour: false
                });
            }
        });
    };

    rebuildTooltip = () => {
        setTimeout(() => {
            ReactTooltip.rebuild();
            console.log("rebuilt")
        }, 500)
    };

    componentDidUpdate = () => {
        this.rebuildTooltip();
    };

    deleteEvent = (eventId) => API.deleteEvent(eventId).then(this.loadEvents());

    render = () => (

        <Container>
            {/* <button data-target="eventFormModal" className="btn modal-trigger">Add an Event</button> */}
            <StyleButton
                btnTxt="Add an Event"
                dataTarget="eventFormModal"
                modal= {true}
            />
            <Title 
                titleText="Calendar"
            />
            <CardOutline
                colSize={ "12" } 
                cardColor={ "" }
                cardTextColor={ "" }
            >
                <div className="">
                    <br></br>    
                    <EventForm
                    onSelect={this.onSelect}
                    eventTitle={this.state.eventTitle}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    startTime={this.state.startTime}
                    endTime={this.state.endTime}
                    eventDescription={this.state.eventDescription}
                    startChange={this.startChange}
                    endChange={this.endChange}
                    handleChange={this.handleChange}
                    handleFormSubmit={this.handleFormSubmit}
                    />
                    <div id="calendarDisplay">
                        <MyCalendar
                        rebuildTooltip={this.rebuildTooltip}
                        events={this.state.events}
                        />
                    </div>
                    {this.state.events.map(event =>(
                        <ReactTooltip 
                        key={event._id}
                        id={event._id}
                        globalEventOff="click"
                        effect="solid"
                        clickable={true}
                        >
                            <DeleteBtn onClick={() => this.deleteEvent(event._id)}/>
                            <span>{event.title}</span>
                            <br></br>
                            <span>{moment(event.start).format("h:mm A")}-{moment(event.end).format("h:mm A")}</span>
                            <br></br>
                            <span>{event.description}</span>
                        </ReactTooltip>
                    ))}
                </div>
            </CardOutline>
        </Container>
    );
};

export default Calendar;