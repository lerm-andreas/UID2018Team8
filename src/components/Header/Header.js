import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom'
import LoginHeader from "./LoginHeader";
import UserHeader from "./UserHeader";

class Header extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={LoginHeader}/>
                <Route path={"/*"} component={UserHeader}/>
            </Switch>

        )
    }
}

export default Header;