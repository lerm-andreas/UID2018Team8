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

export const FormDialog = (props) => {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.description}
                    </DialogContentText>
                    <TextField multiline={true}
                               autoFocus
                               margin="dense"
                               id="name"
                               label="Comment"
                               type="text"
                               fullWidth/>
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={props.addUpvote} disabled={props.disableUpvote}>
                        <Icon>thumb_up</Icon>
                    </IconButton>
                    <IconButton onClick={props.addDownvote} disabled={props.disableDownvote}>
                        <Icon>thumb_down</Icon>
                    </IconButton>
                    <Button onClick={props.handleSendFeedback} color="primary" autoFocus>
                        Send feedback
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};
