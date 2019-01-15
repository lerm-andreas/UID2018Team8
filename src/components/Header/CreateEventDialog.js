import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageUploader from 'react-images-upload';
import recyclingPic from "../../images/recycling2.jpg";
import DialogWindow from "../Utils/DialogWindow"
import Uploader from './../Utils/Uploader';

export class CreateEventDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue:'',
            descriptionValue:'',
            imageValue:'',
        }
        this.handleTitleChange=this.handleTitleChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
    }

    handleTitleChange = (e) => {
        this.setState({
            titleValue: e.target.value
        });
    };

    handleDescriptionChange = (e) => {
        this.setState({
            descriptionValue: e.target.value
        });
    };

    onDrop(picture) {
        this.setState({
            imageValue: recyclingPic,
        });
    }

    render() {
        
        return (
            <div>
                <Dialog
                    fullWidth={true}
                    open={this.props.open}
                    onClose={this.props.onClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle
                        id="form-dialog-title">
                        {"Please introduce the details of the event"}
                        <br/>
                    </DialogTitle>
                    <DialogContent>
                        <TextField multiline={true}
                                   autoFocus
                                   required={true}
                                   margin="normal"
                                   id="name"
                                   label="Title"
                                   type="text"
                                   fullWidth
                                   onChange={this.handleTitleChange}/>
                        <TextField multiline={true}
                                   autoFocus
                                   required={true}
                                   margin="normal"
                                   id="name"
                                   label="Description"
                                   type="text"
                                   fullWidth
                                   onChange={this.handleDescriptionChange}/>

                        {/* <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose image'
                                    onChange={this.onDrop}
                                    maxFileSize={5242880}
                                /> */}
                                <Uploader
                                onDrop = {this.onDrop}
                                />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            disabled={this.state.titleValue.length === 0 || this.state.descriptionValue.length === 0}
                            enabled = {this.state.titleValue.length!==0 && this.state.descriptionValue.length !==0}
                            onClick={()=>this.props.handleCreateEvent({image:this.state.imageValue,title:this.state.titleValue,description:this.state.descriptionValue})}
                            color="primary"
                            autoFocus>
                            Create event
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
