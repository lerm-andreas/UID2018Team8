import React from "react";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage";
import {MainPage} from "./MainPage";
import {ShopPage} from "./ShopPage/ShopPage";
import {EventsPage} from "./EventsPage/EventsPage";
import {MyAccountPage} from "./MyAccountPage/MyAccountPage";
import {shoppingPageUrl,eventsPageUrl,myAccountPageUrl} from "../../BACKEND";

const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={LoginPage}/>
            <Route exact path={"/home"} component={MainPage}/>
            <Route exact path={shoppingPageUrl} component={ShopPage}/>
            <Route exact path={eventsPageUrl} component = {EventsPage}/>
            <Route exact path={myAccountPageUrl} component = {MyAccountPage}/>
        </Switch>
    )
};

export default Main;