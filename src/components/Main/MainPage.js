import React, {Component} from "react";
import Map from "./Map/Map";
import UserHeader from "../Header/UserHeader";
import './MainPage.css'

export class MainPage extends Component {

    render() {
        return <div className="mainPage">
            <UserHeader />
            <Map/>
        </div>
    }
}

