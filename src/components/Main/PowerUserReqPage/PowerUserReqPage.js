import React, {Component} from "react";
import UserHeader from "../../Header/UserHeader";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {cityAreas} from "../../../BACKEND";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";
import TextField from "@material-ui/core/TextField/TextField";
import Card from "@material-ui/core/Card/Card";
import "./PowerUserReqPage.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Uploader from "../../Utils/Uploader/Uploader";
import InfoModal from "../../Utils/InfoModal";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    uploader: {

    }
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


class PowerUserReqPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalTitle: '',
            modalText: '',
            showModal: false,
            isSuccessCase: false,
            area: '',
            motivation: '',
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        if (this.state.area === '' || this.state.motivation === '') {
            this.setState({
                showModal: true,
                modalTitle: "Error!",
                modalText: "Please fill in all required information and try again!"});
        } else {
            this.setState({
                showModal: true,
                isSuccessCase: true,
                modalTitle: "Success!",
                modalText: "Your request has been successfully delivered to one of our admins. After" +
                    " a brief review you will be notified shortly of the decision. :)"});
        }
    };

    handleClose = () => {
        this.setState({ showModal: false });
        if (this.state.isSuccessCase) this.props.history.push('/home');
    };

    render() {

        const {classes} = this.props;

        return (
            <div className="">
                <UserHeader buying={false} searching={false}/>
                <Card className={'request-card'}>
                    <CardHeader title={" Power user request. Please fill in the details"}/>
                    <div>
                    <Select className={'request-sel'} value={this.state.area} onChange={this.handleChange} displayEmpty
                             inputProps={{
                                name: 'area',
                                id: 'search-area',
                            }}>
                        <MenuItem value="">Area*</MenuItem>
                        {cityAreas.map((area) =>
                            <MenuItem value={area.name}>{area.name}</MenuItem>)
                        }
                    </Select>
                    <TextField className={'request-textarea'} name={'motivation'} label={'Motivation*'} onChange={this.handleChange}
                        placeholder="Tell us the reason you want to become a power user"
                        multiline={true} rows={8} rowsMax={8}
                    />
                    <br/>
                    <div className={classes.uploader}>
                        <Uploader/>
                    </div>
                    <br/>
                    </div>
                    <Button className={classes.btn} variant='contained' onClick={this.handleSubmit}>Submit</Button>
                </Card>
                <InfoModal open={this.state.showModal} close={this.handleClose} title={this.state.modalTitle} info={this.state.modalText}/>
            </div>
        )
    }
}

export default withStyles(styles)(PowerUserReqPage);
