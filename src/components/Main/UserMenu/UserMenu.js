import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withRouter} from "react-router-dom";

const UserMenu = (props) => {

    let anchorEl = props.anchorEl;

    return (
        <div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}>
                <MenuItem onClick={() => props.history.push('/')}>Profile</MenuItem>
                <MenuItem onClick={() => props.history.push('/')}>My account</MenuItem>
                <MenuItem onClick={() => props.history.push('/')}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default withRouter(UserMenu);