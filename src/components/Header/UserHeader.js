import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import './UserHeader.css'
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import UserMenu from "../Main/UserMenu/UserMenu";
import {withRouter} from "react-router-dom";

class UserHeader extends Component {

    state = {
        open: false,
        anchorEl: null
    };

    handleClickAway = () => {
        setTimeout(function () { //Start the timer
            this.setState({open: false}) //After 1 second, set render to true
        }.bind(this), 1000)
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
                    <IconButton onClick={this.handleClick}>
                        <AccountCircle/>
                    </IconButton>
                    {open ? (<UserMenu anchorEl={this.state.anchorEl}/>) : null}
                    50 Cluj coins
                    <Button variant={'contained'} onClick={this.props.handleSearch}>Search</Button>
                    <Button variant={'outlined'}
                            onClick={() => this.props.history.push('/')}>Logout</Button>
                </ClickAwayListener>
            </div>
        )
    }
}

export default withRouter(UserHeader);