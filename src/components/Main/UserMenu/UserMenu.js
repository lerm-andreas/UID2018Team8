import React, {Component} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withRouter} from "react-router-dom";
import {shoppingPageUrl} from "../../../BACKEND";

class UserMenu extends Component {
    render() {
        return (
            <Menu
                id="simple-menu"
                anchorEl={this.props.anchorEl}
                open={true}>

                <MenuItem onClick={() => this.props.history.push('/')}>My account</MenuItem>
                <MenuItem onClick={() => this.props.history.push(shoppingPageUrl)}>Shopping
                    Page</MenuItem>
                <MenuItem onClick={() => this.props.history.push('/')}>Events Page</MenuItem>
                <MenuItem onClick={() => this.props.history.push('/')}>Logout</MenuItem>
            </Menu>
        );
    }
}


export default withRouter(UserMenu);