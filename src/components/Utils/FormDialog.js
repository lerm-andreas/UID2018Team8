import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import ConfirmationDialog from "./ConfirmationDialog";

export class FormDialog extends React.Component {


    sendComment = () => {
        this.props.handleSendComment(this.state.textFieldValue);
        this.setState({showConfDialog: true})
    };

    handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    };
    onClose = () => {
        this.setState({showConfDialog: false})
    };

    constructor(props) {
        super(props);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.state = {
            textFieldValue: '',
            showConfDialog: false,
        }
    }

    render() {

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.onClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.description}
                        </DialogContentText>
                        <TextField multiline={true}
                                   autoFocus
                                   required={true}
                                   margin="normal"
                                   id="name"
                                   label="Comment"
                                   type="text"
                                   fullWidth
                                   onChange={this.handleTextFieldChange}/>
                        {"Votes " + this.props.issue.votes}
                    </DialogContent>
                    <DialogActions>
                        <IconButton onClick={this.props.addVote}>
                            <Icon
                                variant="outlined">{this.props.issue.beenVoted === true ? "thumb_down"
                                : "thumb_up"}</Icon>
                        </IconButton>
                        <Button
                            disabled={this.state.textFieldValue.length === 0}
                            onClick={this.sendComment}
                            color="primary"
                            autoFocus>
                            Send feedback
                        </Button>
                    </DialogActions>
                </Dialog>
                <ConfirmationDialog open={this.state.showConfDialog}
                                    onClose={this.onClose}
                                    description={"Feedback added"}/>
            </div>
        );
    }
}
