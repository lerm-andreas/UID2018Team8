import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withRouter} from "react-router-dom";
import {shoppingPage} from "../../../BACKEND";

export const UserMenu = (props) => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={props.anchorEl}
            open={true}
        >
            <MenuItem onClick={() => props.history.push('/')}>My account</MenuItem>
            <MenuItem onClick={() => props.history.push(shoppingPage)}>Shopping
                Page</MenuItem>
            <MenuItem onClick={() => props.history.push('/')}>Events Page</MenuItem>
            <MenuItem onClick={() => props.history.push('/')}>Logout</MenuItem>
        </Menu>
    );
}


export default withRouter(UserMenu);