import {Component} from "react";
import React from "react";
import UserHeader from "../../Header/UserHeader";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {cityAreas} from "../../../BACKEND";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";
import TextField from "@material-ui/core/TextField/TextField";
import Card from "@material-ui/core/Card/Card";
import "./PowerUserReqPage.css";
import withStyles from "@material-ui/core/styles/withStyles";
import ShoppingCart from "../ShopPage/ShoppingCart/ShoppingCart";
import Modal from "@material-ui/core/Modal/Modal";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    btn: {
        marginTop: "10vh"
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
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
        let areaSelector =[];
        Object.entries(cityAreas).forEach(([key,val]) => {
            areaSelector.push(<MenuItem value={val}>{val}</MenuItem>)
        });

        const {classes} = this.props;

        return (
            <div className="">
                <UserHeader buying={false} searching={false}/>
                <Card className={'request-card'}>
                    <Select className={'request-sel'} value={this.state.area} onChange={this.handleChange} displayEmpty
                             inputProps={{
                                name: 'area',
                                id: 'search-area',
                            }}>
                        <MenuItem value="">Area*</MenuItem>
                        {areaSelector}
                    </Select>
                    <TextField className={'request-textarea'} name={'motivation'} label={'Motivation*'} onChange={this.handleChange}
                        placeholder="Tell us the reason you want to become a power user"
                        multiline={true} rows={8} rowsMax={8}
                    />
                    <br/>
                   //todo: uploader
                    <br/>
                    <Button className={classes.btn} variant='contained' onClick={this.handleSubmit}>Submit</Button>
                </Card>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.showModal} onClose={this.handleClose}>
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            {this.state.modalTitle}
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            {this.state.modalText}
                        </Typography>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(PowerUserReqPage);
