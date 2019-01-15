import React, {Component} from 'react';
import UserHeader from "../../../Header/UserHeader";
import ReportedUserList from './ReportedUserList';

export class BanUsersPage extends Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        const {classes} = this.props;
        return (
            <div>
            <UserHeader  searching={true} buying={false} handleShoppingCart={this.handleShoppingCart}/>
            <h1>Ban Users</h1>
            <ReportedUserList/>
            </div>
        );
    }

}