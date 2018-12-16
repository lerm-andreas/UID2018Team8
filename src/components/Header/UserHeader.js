import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import './UserHeader.css'
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import UserMenu from "../Main/UserMenu/UserMenu";

class UserHeader extends Component {

    state = {
        open: false,
        anchorEl: null
    };

    handleClickAway = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    render() {
        const {open} = this.state;
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <div>
                        <IconButton onClick={this.handleClick}>
                            <AccountCircle/>
                        </IconButton>
                        {open ? (<UserMenu anchorEl={this.state.anchorEl}/>) : null}
                        50 Cluj coins
                        <Button variant={'contained'}>Search</Button>
                        <Button variant={'outlined'}>Logout</Button>
                    </div>
                </ClickAwayListener>
            </div>
        )
    }
};

export default UserHeader;