import React from "react";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage";
import {MainPage} from "./MainPage";
import {ShopPage} from "./ShopPage/ShopPage";
import {homePageUrl, shoppingPageUrl} from "../../BACKEND";

const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={LoginPage}/>
            <Route exact path={"/home"} component={MainPage}/>
            <Route exact path={shoppingPageUrl} component={ShopPage}/>
        </Switch>
    )

};

export default Main;