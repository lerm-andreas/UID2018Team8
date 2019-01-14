import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {Status} from "../../BACKEND";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import ConfirmationDialog from "./ConfirmationDialog";

export class IssueDialog extends React.Component {


    onClose = () => {
        this.setState({showConfDialog: false})
    };

    handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    };
    handleAdminChanges = () => {
        this.props.handleAdminChanges(this.getChanges());
        this.setState({showConfDialog: true})
    };

    handleChange = (e) => {
        this.setState({
            statusValue: e.target.value
        });
    };

    getChanges = () => {
        return {status: this.state.statusValue, adminComments: this.state.textFieldValue}
    };

    constructor(props) {
        super(props);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.state = {
            textFieldValue: '',
            statusValue: this.props.issue.status,
            showConfDialog: false,
        }
    }

    render() {

        let issue = this.props.issue;

        return (
            <div>
                <Dialog
                    fullWidth={true}
                    open={this.props.open}
                    onClose={this.props.onClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle
                        id="form-dialog-title">
                        {"Issue nr:" + issue.nr + " Category:" + issue.category + " Nr votes:" + issue.votes}
                        <br/>
                        {"Status:" + issue.status}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {"User description:" + issue.description}
                            <br/>
                            {"User comments:" + issue.userComments}
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
                        <Select
                            value={this.state.statusValue}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'new status'
                            }}>
                            <MenuItem value={Status.inProgress}>{Status.inProgress}</MenuItem>
                            <MenuItem value={Status.approved}>{Status.approved}</MenuItem>
                            <MenuItem value={Status.completed}>{Status.completed}</MenuItem>
                        </Select>
                        <FormHelperText>Choose the updated status</FormHelperText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            disabled={this.state.textFieldValue.length === 0}
                            onClick={this.handleAdminChanges}
                            color="primary"
                            autoFocus>
                            Finish changes
                        </Button>
                    </DialogActions>
                </Dialog>
                <ConfirmationDialog open={this.state.showConfDialog}
                                    onClose={this.onClose}
                                    description={"Status changed added"}/>
            </div>
        );
    }
}
