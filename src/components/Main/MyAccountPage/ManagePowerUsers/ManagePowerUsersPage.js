import React, {Component} from 'react';
import UserHeader from "../../../Header/UserHeader";
import PowerUserRequestList from './PowerUserRequestList';

export class ManagePowerUsersPage extends Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        const {classes} = this.props;
        return (
            <div>
            <UserHeader  searching={true} buying={false} handleShoppingCart={this.handleShoppingCart}/>
            <h1>Manage Power Users</h1>
            <PowerUserRequestList/>
            </div>
        );
    }

}