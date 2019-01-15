import React from "react";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage";
import {MainPage} from "./MainPage";
import {ShopPage} from "./ShopPage/ShopPage";
import {EventsPage} from "./EventsPage/EventsPage";
import MyAccountPage from "./MyAccountPage/MyAccountPage";
import PowerUserReqPage from "./PowerUserReqPage/PowerUserReqPage";
import {ManagePowerUsersPage} from "./MyAccountPage/ManagePowerUsers/ManagePowerUsersPage"
import {BanUsersPage} from "./MyAccountPage/BanUsers/BanUsersPage"
import {shoppingPageUrl,eventsPageUrl,myAccountPageUrl,managePowerUsersPageUrl, banUsersPageUrl, powerUserReqUrl} from "../../BACKEND";

const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={LoginPage}/>
            <Route exact path={"/home"} component={MainPage}/>
            <Route exact path={shoppingPageUrl} component={ShopPage}/>
            <Route exact path={eventsPageUrl} component = {EventsPage}/>
            <Route exact path={myAccountPageUrl} component = {MyAccountPage}/>
            <Route exact path={powerUserReqUrl} component = {PowerUserReqPage}/>
            <Route exact path={managePowerUsersPageUrl} component = {ManagePowerUsersPage}/>
            <Route exact path={banUsersPageUrl} component = {BanUsersPage}/>

        </Switch>
    )
};

export default Main;