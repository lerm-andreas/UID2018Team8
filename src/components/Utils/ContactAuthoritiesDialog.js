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
import {Authorities} from "../../BACKEND";
import ConfirmationDialog from './ConfirmationDialog';

export class ContactAuthoritiesDialog extends React.Component {


    constructor(props) {
        super(props);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.state = {
            textFieldValue: '',
            statusValue: Authorities.police,
            showConfigDialog: false
        }
    }

    handleTextFieldChange = (e) => {
        this.setState({
            textFieldValue: e.target.value
        });
    };

    handleChange = (e) => {
        this.setState({
            statusValue: e.target.value
        });
    };

    getChanges = () => {
        return {status: this.state.statusValue, adminComments: this.state.textFieldValue}
    };

    handleContactAuthority = () => {
        this.setState({showConfigDialog: true})
        this.props.handleAdminChanges2(this.getChanges())
    }

    onClose = () => {
        this.setState({showConfigDialog: false})
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
                        <h4>Contact authorities</h4>
                        {"Issue nr: " + issue.nr + " Category: " + issue.category + " Nr votes: " + issue.votes}
                        <br/>
                        {"Status: " + issue.status}
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
                                name: 'choose authority'
                            }}>
                            <MenuItem value={Authorities.police}>{Authorities.police}</MenuItem>
                            <MenuItem value={Authorities.sanitationDepartment}>{Authorities.sanitationDepartment}</MenuItem>
                            <MenuItem value={Authorities.fireDepartment}>{Authorities.fireDepartment}</MenuItem>
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            disabled={this.state.textFieldValue.length === 0}
                            onClick={this.handleContactAuthority}
                            color="primary"
                            autoFocus>
                            Notify authority
                        </Button>
                    </DialogActions>
                </Dialog>
                <ConfirmationDialog
                    open={this.state.showConfigDialog}
                    onClose = {this.onClose}
                    description={"E-mail has been sent to selected authority!"}>
                </ConfirmationDialog>
            </div>
        );
    }
}
