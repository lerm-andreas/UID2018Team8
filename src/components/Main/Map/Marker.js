import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import DialogWindow from "../../Utils/DialogWindow";
import {FormDialog} from "../../Utils/FormDialog";
import ShareButton from "../../Utils/ShareButton";
import {IssueDialog} from "../../Utils/IssueDialog";
import {Categories, CategoryToIcon, getKeyByValue, Status, StatusToColor} from "../../../BACKEND";

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }
});


class Marker extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            showInitialDialog: false,
            role: localStorage.getItem('role'),
            showFeedbackDialog: false,
            showSharePost: false,
            showIssueDialog: false,
        };
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleFeedbackDialog = this.handleFeedbackDialog.bind(this);
        this.handleFeedbackDialogClose = this.handleFeedbackDialogClose.bind(this);
        this.handleSharePost = this.handleSharePost.bind(this);
    }

    handleDialogOpen = () => {
        this.setState({showInitialDialog: true})
    };

    handleDialogClose = () => {
        this.setState({showInitialDialog: false})
    };

    handleFeedbackDialog = () => {
        this.setState({showFeedbackDialog: true})
    };

    handleFeedbackDialogClose = () => {
        this.setState({showFeedbackDialog: false});
    };

    handleSharePost = () => {
        this.setState({showSharePost: true});
    };

    handleSharePostClose = () => {
        this.setState({showSharePost: false});
    };

    handleIssueDialog = () => {
        this.setState({showIssueDialog: true})
    };

    handleIssueDialogClose = () => {
        this.setState({showIssueDialog: false})
    };

    render() {
        const {classes} = this.props;
        let dialogWindow = null;
        let issue = this.props.marker;
        let icon = CategoryToIcon[getKeyByValue(Categories, issue.category)];
        // let dialogProps = {};
        if (this.state.role === "user") {
            let description = <>
                {"Status: " + this.props.marker.status}
                <br/>
                {"User description: " + this.props.marker.description}
                <br/>
                {"Admin comment: " + this.props.marker.adminComments}
            </>;
            dialogWindow =
                <DialogWindow
                    open={this.state.showInitialDialog}
                    onClose={this.handleDialogClose}
                    title={"Do you want to add feedback or share this problem on Facebook?"}
                    description={description}
                    option1={"Add feedback"}
                    option2={<ShareButton/>}
                    onOption1={this.handleFeedbackDialog}/>
        }

        else {
            dialogWindow =
                <DialogWindow open={this.state.showInitialDialog}
                              onClose={this.handleDialogClose}
                              title={"Issue nr: " + issue.nr + " Category: " + issue.category + " Nr votes: " + issue.votes}
                              description={"Do you want to change the status of the problem" +
                              " or contact the authorities"}
                              option1={"Change status"}
                              option2={"Contact authorities"}
                              onOption1={this.handleIssueDialog}
                              onOption2={this.handleContactAuthorities}/>
        }

        return (
            <>
                <IconButton aria-label="Delete" className={classes.button}
                            onClick={this.handleDialogOpen}>
                    <Icon
                        style={{color: StatusToColor[getKeyByValue(Status, this.props.marker.status)]}}>{icon}</Icon>
                </IconButton>
                {dialogWindow}
                <FormDialog open={this.state.showFeedbackDialog && this.props.showDialog}
                            onClose={this.handleFeedbackDialogClose}
                            title={"Adding feedback"}
                            description={"Please add a relevant comment regarding the problem."}
                            issue={this.props.marker}
                            addVote={this.props.addVote}
                            handleSendComment={this.props.handleSendComment}/>
                <IssueDialog open={this.state.showIssueDialog && this.props.showDialog}
                             onClose={this.handleIssueDialogClose}
                             issue={this.props.marker}
                             handleAdminChanges={this.props.handleAdminChanges}/>
            </>
        )
    }
}

export default withStyles(styles)(Marker);