import React, {Component} from "react";
import UserHeader from "../../Header/UserHeader";
import EventList from "../../Main/EventsPage/EventsList/EventList"

export class EventsPage extends Component {

    render() {
        return (
            <div className="eventsPage">
            <UserHeader buying={true} searching={false}
                            handleShoppingCart={this.handleShoppingCart}/>
                <EventList addItemToShoppingCart={this.addItemToShoppingCart}/>
            </div>
        )
    }
}