import React, {Component} from "react";
import Map from "./Map/Map";
import UserHeader from "../Header/UserHeader";
import './MainPage.css'

export class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            anchorEl: null
        };
    }

    handleIconClick = (event) => {
        if (this.state.anchorEl === null)
            this.setState({anchorEl: event.currentTarget});
        else
            this.setState({anchorEl: null})
    };


    render() {

        return <div className="mainPage">
            <UserHeader />
            <Map/>
        </div>
    }
}

