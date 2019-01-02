import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import DialogWindow from "../../Utils/DialogWindow";
import {FormDialog} from "../../Utils/FormDialog";

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    icon: {
        color: "#FB8C00"
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class Marker extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            showInitialDialog: false,
            userRole: localStorage.getItem('role'),
            showFeedbackDialog: false
        };
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleFeedbackDialog = this.handleFeedbackDialog.bind(this);
        this.handleFeedbackDialogClose = this.handleFeedbackDialogClose.bind(this);

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

    render() {
        const {classes} = this.props;

        return (
            <>
                <IconButton aria-label="Delete" className={classes.fab}
                            onClick={this.handleDialogOpen}>
                    <Icon className={classes.icon}>place</Icon>
                </IconButton>
                <DialogWindow open={this.state.showInitialDialog} onClose={this.handleDialogClose}
                              title={"Do you want to add feedback or share this problem on Facebook?"}
                              option1={"Add feedback"}
                              option2={"Share on Facebook"}
                              onOption1={this.handleFeedbackDialog}
                              onOption2={() => alert('Action 2 picked')}/>
                <FormDialog open={this.state.showFeedbackDialog}
                            onClose={this.handleFeedbackDialogClose}
                            title={"Adding feedback"}
                            description={"Please add a relevant comment regarding the problem."}
                            addUpvote={this.addUpvote}
                />

            </>
        )
    }
}

export default withStyles(styles)(Marker);