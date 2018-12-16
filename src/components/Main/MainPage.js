import React, {Component} from "react";
import Map from "./Map/Map";
import UserHeader from "../Header/UserHeader";
import './MainPage.css'
import UserMenu from "./UserMenu/UserMenu";

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
            <UserHeader onClick={this.handleIconClick.bind(this)}/>
            <UserMenu anchorEl={this.state.anchorEl}/>
            <Map/>
        </div>
    }
}

