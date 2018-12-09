import {Component} from "react";
import React from "react";
import { Switch, Route } from 'react-router-dom'
import {Placeholder} from "./Placeholder";
import LoginForm from "./LoginForm";

class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={LoginForm}/>
                <Route path={"/*"} component={Placeholder}/>
            </Switch>
        )
    }
}

export default Main;