import React, {Component} from "react";
import Map from "./Map/Map";
import UserHeader from "../Header/UserHeader";
import './MainPage.css'

export class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchOpen: false
        }
    }

    handleSearch = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    };

    render() {
        return <div className="mainPage">
            <UserHeader handleSearch={this.handleSearch}/>
            <Map searchOpen={this.state.searchOpen}/>
        </div>
    }
}

