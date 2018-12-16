import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage/LoginPage";
import {MainPage} from "./MainPage";
import {ShopPage} from "./ShopPage/ShopPage";

const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={LoginPage}/>
            <Route path={"/home"} component={MainPage}/>
            <Route exact path={"/shoppingPage"} component={ShopPage}/>
        </Switch>
    )

};

export default Main;