import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import UserMenu from "../Main/UserMenu/UserMenu";
import {withRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon/Icon";
import {CreateEventDialog} from "./CreateEventDialog"
import {homePageUrl} from "../../BACKEND";
import Divider from "@material-ui/core/Divider/Divider";


const styles = theme => ({
    firstButton: {
        marginLeft: "800px"
    },
    secondButton: {
        marginLeft: "25px"
    }
});

class UserHeaderEvent extends Component {
    constructor(props) {
    super(props)
    this.state = {
        showUserMenu: false,
        anchorEl: null,
        showCreateEventDialog: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleCreateEventDialogClose = this.handleCreateEventDialogClose.bind(this);
    this.handleCreateEventDialogOpen = this.handleCreateEventDialogOpen.bind(this);
}

    handleClickAway = () => {
        setTimeout(function () {
            this.setState({showUserMenu: false}) //After 2 seconds, set
            // render to true
        }.bind(this), 2000)
    };

    handleClick = (event) => {
        this.setState({
            showUserMenu: true,
            anchorEl: event.currentTarget
        });
    };

    handleCreateEventDialogClose = () => {
        this.setState({showCreateEventDialog: false})
    };

    handleCreateEventDialogOpen = () => {
        this.setState({showCreateEventDialog: true})
    }

    render() {

        const {classes} = this.props;
        let shoppingButton = null;
        let searchButton = null;
        let buttonPlaceholder = null;

        if (this.props.buying) {
            shoppingButton = <Button className={classes.firstButton} variant={'outlined'}
                                     onClick={this.props.handleShoppingCart}>Shopping
                Cart</Button>;
        }
        if (this.props.searching) {
            searchButton = <Button className={classes.firstButton} variant={'outlined'}
                                   onClick={this.props.handleSearch}>Search</Button>
        }

        if (!this.props.searching && !this.props.buying) {
            buttonPlaceholder = <Button className={classes.firstButton}/>
        }


        let userMenu = this.state.showUserMenu ? (
            <UserMenu anchorEl={this.state.anchorEl}/>) : null;
        
        let createEventDialog = <CreateEventDialog
                                open = {this.state.showCreateEventDialog}
                                onClose = {this.handleCreateEventDialogClose}
                                handleCreateEvent={this.props.handleCreateEvent}>
        </CreateEventDialog>;

        return (

            <ClickAwayListener onClickAway={this.handleClickAway}>
                <IconButton onClick={() => this.props.history.push(homePageUrl)}>
                    <Icon>home</Icon>
                </IconButton>

                <IconButton onClick={this.handleClick}>
                    <AccountCircle/>
                </IconButton>
                {localStorage.getItem('coins') + ' Cluj Coins'}
                {searchButton}
                {userMenu}
                <Button className={classes.firstButton} variant={'contained'}
                        onClick={this.handleCreateEventDialogOpen}>Create Event</Button>
                <Button className={classes.secondButton} variant={'contained'}
                        onClick={() => this.props.history.push('/')}>Logout</Button>


                {createEventDialog}
                <Divider/>
            </ClickAwayListener>
            
        )
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(UserHeaderEvent));