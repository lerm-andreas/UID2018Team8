import React from "react";
import Map from "./Map/Map";
import UserHeader from "../Header/UserHeader";
import './MainPage.css'

export const MainPage = () => {
    return (
        <div className="mainPage">
            <UserHeader/>
            <Map/>
        </div>
    )
}