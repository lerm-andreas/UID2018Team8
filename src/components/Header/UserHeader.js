import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import UserMenu from "../Main/UserMenu/UserMenu";
import {withRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon/Icon";


const styles = theme => ({
    firstButton: {
        marginLeft: "800px"
    },
    secondButton: {
        marginLeft: "25px"
    }
});

class UserHeader extends Component {

    state = {
        showUserMenu: false,
        anchorEl: null,
    };

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


    render() {

        const {classes} = this.props;
        let shoppingButton = null;
        let searchButton = null;
        if (this.props.buying) {
            shoppingButton = <Button className={classes.firstButton} variant={'outlined'}
                                     onClick={this.props.handleShoppingCart}>Shopping
                Cart</Button>;
        }
        if (this.props.searching) {
            searchButton = <Button className={classes.firstButton} variant={'outlined'}
                                   onClick={this.props.handleSearch}>Search</Button>
        }

        let userMenu = this.state.showUserMenu ? (
            <UserMenu anchorEl={this.state.anchorEl}/>) : null;

        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway}>

                    <IconButton onClick={() => this.props.history.push('/home')}>
                        <Icon>home</Icon>
                    </IconButton>

                    <IconButton onClick={this.handleClick}>
                        <AccountCircle/>
                    </IconButton>

                    50 Cluj coins
                    {shoppingButton}
                    {searchButton}
                    {userMenu}
                    <Button className={classes.secondButton} variant={'contained'}
                            onClick={() => this.props.history.push('/')}>Logout</Button>
                </ClickAwayListener>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(UserHeader));