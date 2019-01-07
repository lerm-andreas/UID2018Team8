import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckboxListSecondary from "./CheckboxList";

const AlertDialog = (props) => {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle
                    id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.description}
                    </DialogContentText>
                <DialogContentText>
                    <CheckboxListSecondary/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onOption1} color="primary">
                        {props.option1}
                    </Button>
                    <Button onClick={props.onOption2} color="primary" autoFocus>
                        {props.option2}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

export default AlertDialog;