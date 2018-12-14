import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom'
import LoginHeader from "./LoginHeader";
import UserHeader from "./UserHeader";
import ShopList from "../Main/ShopPage/ShopList/ShopList";

class Header extends Component {

    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={LoginHeader}/>
                <Route exact path={"/home"} component={UserHeader}/>
                <Route exact path={"/shoppingPage"} component={ShopList}/>
            </Switch>

        )
    }
}

export default Header;