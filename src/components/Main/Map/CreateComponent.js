import {Component} from "react";
import React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {Categories, Status, stringToCategory} from "../../../BACKEND";
import Typography from "@material-ui/core/Typography/Typography";
import Uploader from "../../Utils/Uploader/Uploader";
import DialogWindow from "../../Utils/DialogWindow";
import Modal from "@material-ui/core/Modal/Modal";
import InfoModal from "../../Utils/InfoModal";

const styles = theme => ({
    title: {
        marginTop: '3vw',
    },
    create: {
        width: '30vw',
        maxWidth: '30vw',
        overflow: 'hidden',
        height: '100%',
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
    },
    li: {
        display: 'inline-block',
        width: '50%',
    },
    btn: {
        height: '40px',
        width: '100%',
    },
    createSel: {
        marginTop: '4vw',
        minWidth: '20vw',
    },
    createTxtarea: {
        marginTop: '2vw',
        width: '20vw',
    },
    uploader: {
        width: '20vw',
        overflow: 'left',
        margin: '1vw',
        marginLeft: '5vw',
        marginTop: '3vw',
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            description: '',

            nr: 4, // next issue to create
            showDialogWindow: false,
            successful: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState = () => {
        this.setState({
            category: '',
            description: '',
            showDialogWindow: false,
            successful: false,
        })
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleClose = () => {
        this.resetState();
        this.props.close();
    };

    handleSubmit = () => {
        console.log('wut');
        if (this.state.category === '' || this.state.description === '')
            this.setState({successful: false});
        else
            this.setState({successful: true});
        this.setState({showDialogWindow: true});
    };

    handleCreate = () => {
        const cat = stringToCategory(this.state.category);
        let newIssueMarker = {
            nr: this.state.nr,
            category: cat,
            status: Status.new,
            votes: 0,
            beenVoted: false,
            userComments: [],
            adminComments: [],
            description: this.state.description,
        };

        this.props.submit(newIssueMarker);

        this.setState({nr: this.state.nr + 1});
        this.handleClose();
    };

    render() {
        const {classes} = this.props;
        let categorySelector =[];
        Object.entries(Categories).forEach(([key,val]) => {
            categorySelector.push(<MenuItem value={val}>{val}</MenuItem>)
        });
        let dialogWindow = this.state.successful ?
            <DialogWindow open={this.state.showDialogWindow} onClose={this.closeDialogWindow}
                          title={"Issue Creation"}
                          description={"Are you sure you would like to create the issue with the noted specifications?"}
                          option1={"YES"}
                          option2={"NO"}
                          onOption1={this.handleCreate}
                          onOption2={() => {this.setState({showDialogWindow: false})}}/> :
            <InfoModal title={'Creation failed'} info={'Please make sure you completed all the required fields and try again.'}
                        open={this.state.showDialogWindow} close={() => this.setState({showDialogWindow: false})}/>


        return (
            <Drawer anchor="right" open={this.props.show} onClose={this.props.close} variant={"persistent"}>
                <div className={classes.create}>
                    <Typography className={classes.title} variant="h4">Create a new issue:</Typography>
                    <Select className={classes.createSel} value={this.state.category} onChange={this.handleChange} displayEmpty
                            inputProps={{
                                name: 'category',
                                id: 'create-category',
                            }}>
                        <MenuItem value="">Category*</MenuItem>
                        {categorySelector}
                    </Select>
                    <br/>
                    <TextField className={classes.createTxtarea} name={'description'} label={'Description*'} onChange={this.handleChange}
                               placeholder="Tell us the details of the issue"
                               multiline={true} rows={8} rowsMax={8} value={this.state.description}
                    />
                    <br/>
                    <div className={classes.uploader}>
                        <Uploader/>
                    </div>
                    <br/>
                </div>
                <ul className={classes.ul}>
                <li className={classes.li}><Button className={classes.btn} onClick={this.handleSubmit}>Submit</Button></li>
                <li className={classes.li}><Button className={classes.btn} onClick={this.handleClose}>Cancel</Button></li>
                </ul>
                {dialogWindow}
            </Drawer>
        )
    }
}

export default withStyles(styles)(CreateComponent);