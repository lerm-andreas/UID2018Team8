import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import UserHeader from "../../Header/UserHeader";
import AdminSpecificTasks from "./AdminSpecificTasks"
import UserInformation from "./UserInformation"
import Grid from '@material-ui/core/Grid';
import './AccountPage.css'

const styles = theme => ({

    root: {
        padding: 30,
        flexGrow: 1,
        marginTop: '20px',
    }
});

class MyAccountPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        const adminPanel = localStorage.getItem("role") === "admin" ?
            <AdminSpecificTasks button="hauhau"/> : null;
        return (
            <div className="accountPage">
                <UserHeader buying={false} searching={true}/>

                <Grid container justify="center" alignItems="center"
                      className={classes.root}>
                    {adminPanel}
                    <UserInformation

                        firstName="Georgel"
                        secondName="Baiat fin"
                        birthday="18.08.1996"
                        address="Strada Bucuresti nr. 70A"
                        eMail="georgel@gmail.com"/>
                </Grid>
            </div>
        );
    }

}

MyAccountPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAccountPage);