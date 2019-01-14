import React, {Component} from "react";
import UserHeaderEvent from "../../Header/UserHeaderEvent";
import EventList from "../../Main/EventsPage/EventsList/EventList"
import {eventItems} from "../../../BACKEND";


export class EventsPage extends Component {

    handleCreateEvent = (event) => {
        alert(eventItems.length);
        let currEvents = this.state.events;
        currEvents.push({image: event.image, title: event.title, description: event.description});
        this.setState({
            events: currEvents,
        })
    };

    constructor(props) {
        super(props)
        this.state = {
            events: eventItems,
        };
        this.handleCreateEvent = this.handleCreateEvent.bind(this);
    }

    render() {
        return (
            <div className="eventsPage">
                <UserHeaderEvent buying={false} searching={false}
                                 handleShoppingCart={this.handleShoppingCart}
                                 handleCreateEvent={this.handleCreateEvent}/>
                <EventList events={this.state.events}
                           addItemToShoppingCart={this.addItemToShoppingCart}/>
            </div>
        )
    }
}