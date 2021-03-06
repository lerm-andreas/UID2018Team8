import React from 'react';
import { Button } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import CheckboxListSecondary from "./CheckboxList";
import DialogWindow from "../../../../Utils/DialogWindow";
import DialogWindowInvite from "./DialogWindowInvite";
const styles = theme => ({
    // fab: {
    //     margin: theme.spacing.unit,
    // },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        size: 'small',
        color: 'primary',
        variant: 'contained',
    }
});

class InviteEvent extends React.Component {

    constructor(props) {

        super(props);
        this.state={
            showInviteBox : false,
            showInviteButton: false,
            showConfirmationDialog: false,
            buttonText: 'Join event',
            buttonColor: "primary"
        }
        this.handleInviteBoxOpen = this.handleInviteBoxOpen.bind(this);
        this.handleInviteBoxClose = this.handleInviteBoxClose.bind(this);
        this.handleConfirmationDialogClose=this.handleConfirmationDialogClose.bind(this);
        this.handleConfirmationDialogOpen= this.handleConfirmationDialogOpen.bind(this);
        this.handleJoinButtonClicked = this.handleJoinButtonClicked.bind(this);
    }

    handleInviteBoxOpen = () => {
        this.setState({showInviteBox: true})
    };

    handleInviteBoxClose = () => {
        this.setState({showInviteBox: false})
    };

    handleConfirmationDialogOpen = () => {
        this.setState({showConfirmationDialog: true})
    };

    handleConfirmationDialogClose = () => {
        this.setState({showConfirmationDialog: false,showInviteBox:false})
    };

    handleJoinButtonClicked = () => {
        if(this.state.buttonText=='Join event'){
        this.setState({buttonText:'Going',buttonColor:"secondary",showInviteButton: true})
        }
        else{
            this.setState({buttonText:'Join event',buttonColor:"primary",showInviteButton: false})
        }
    }
    render(){
        const {classes} = this.props;
        let inviteUsersList = 
        <DialogWindowInvite 
            open={this.state.showInviteBox && !this.state.showConfirmationDialog}
            onClose={this.handleInviteBoxClose}
            title={"Select the users you want to invite"}
            option1={"Invite selected users"}
            onOption1={this.handleConfirmationDialogOpen}>
        </DialogWindowInvite> 

        let confimarionDialog = 
        <DialogWindow
            open={this.state.showConfirmationDialog}
            onClose={this.handleConfirmationDialogClose}
            title={"You have successfully invited the users to this event!"}>
        </DialogWindow>
        return(
            <div>   
                    <Button className={classes.button}
                        size="small" 
                        color={this.state.buttonColor}
                        variant='contained'
                        onClick={this.handleJoinButtonClicked}>
                        {this.state.buttonText}
                    </Button>
                    {this.state.showInviteButton ?
                    <Button className={classes.button}
                        size="small" 
                        color="primary"
                        variant='contained'
                        onClick={this.handleInviteBoxOpen}>
                        Invite people
                    </Button> :null}
                    
                     {inviteUsersList}
                    
                     {confimarionDialog}
            </div>
        )
    }
}
export default withStyles(styles)(InviteEvent);