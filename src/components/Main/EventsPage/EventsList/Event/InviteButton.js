import React from 'react';
import { Button } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import CheckboxListSecondary from "./CheckboxList";
import DialogWindow from "../../../../Utils/DialogWindow";
import DialogWindowInvite from "./DialogWindowInvite";
const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        size: 'small',
        color: 'primary',
        variant: 'contained',
    }
});


class InviteButton extends React.Component {

    constructor(props) {

        super(props);
        this.state={
            showInviteBox : false,
        }
        this.handleInviteBoxOpen = this.handleInviteBoxOpen.bind(this);
        this.handleInviteBoxClose = this.handleInviteBoxClose.bind(this);
    }

    handleInviteBoxOpen = () => {
        this.setState({showInviteBox: true})
    };

    handleInviteBoxClose = () => {
        this.setState({showInviteBox: false})
    };

    render(){
        const {classes} = this.props;
        let dialogWindow = 
        <DialogWindowInvite 
            open={this.state.showInviteBox}
            onClose={this.handleInviteBoxClose}
            title={"Select the users you want to invite"}
            option1={"Invite selected users"}>      
        </DialogWindowInvite> 
        return(
            <>
                    <Button className={classes.button}
                        size="small" color="primary"
                        variant='contained'
                        onClick={this.handleInviteBoxOpen}>
                        Invite people
                    </Button>
                     {dialogWindow}
            </>
        )
    }
}
export default withStyles(styles)(InviteButton);