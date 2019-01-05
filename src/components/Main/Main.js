import React from "react";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage";
import {MainPage} from "./MainPage";
import {ShopPage} from "./ShopPage/ShopPage";
import {EventsPage} from "./EventsPage/EventsPage";
import {shoppingPageUrl,eventsPageUrl} from "../../BACKEND";

const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={LoginPage}/>
            <Route exact path={"/home"} component={MainPage}/>
            <Route exact path={shoppingPageUrl} component={ShopPage}/>
            <Route exact path={eventsPageUrl} component = {EventsPage}/>
        </Switch>
    )
};

export default Main;