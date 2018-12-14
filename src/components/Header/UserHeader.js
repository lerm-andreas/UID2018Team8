import React from "react";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';

const UserHeader = () => {
    return (
        <div>
            <IconButton>
                <AccountCircle/>
            </IconButton>
            50 Cluj coins
            <Button variant={'contained'}>Search</Button>
            <Button variant={'outlined'}>Logout</Button>
        </div>
    )
};

export default UserHeader;