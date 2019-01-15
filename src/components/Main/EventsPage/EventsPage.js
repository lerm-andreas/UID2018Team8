import React, {Component} from "react";
import UserHeaderEvent from "../../Header/UserHeaderEvent";
import EventList from "../../Main/EventsPage/EventsList/EventList";
import { eventItems } from "../../../BACKEND";
import DialogWindow from "../../Utils/DialogWindow"
export class EventsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events:eventItems,
            showConfirmationDialog: false
        }
        this.handleCreateEvent = this.handleCreateEvent.bind(this);
        this.handleConfirmationDialogClose = this.handleConfirmationDialogClose.bind(this);
        this.handleConfirmationDialogOpen = this.handleConfirmationDialogOpen.bind(this);
    }

    handleConfirmationDialogOpen = () => {
        this.setState({showConfirmationDialog: true})
    };

    handleConfirmationDialogClose = () => {
        this.setState({showConfirmationDialog: false})
    };

    handleCreateEvent= (event) =>{
        let currEvents = this.state.events;
        currEvents.push({image: event.image, title: event.title, description: event.description});
        this.setState({
            events:currEvents,
            showConfirmationDialog: true,
           
        })
        localStorage.setItem('coins', parseInt(localStorage.getItem('coins'),10)+5);
    };

    render() {
        let confimarionDialog = 
        <DialogWindow
            open={this.state.showConfirmationDialog}
            onClose={this.handleConfirmationDialogClose}
            title={"You have successfully created a new event!"}>
        </DialogWindow>
        return (
            <div className="eventsPage">
            {confimarionDialog}
            <UserHeaderEvent buying={true} searching={false}
                            handleShoppingCart={this.handleShoppingCart}
                            handleCreateEvent={this.handleCreateEvent}/>
                <EventList events={this.state.events} addItemToShoppingCart={this.addItemToShoppingCart}/>
            </div>
        )
    }
}