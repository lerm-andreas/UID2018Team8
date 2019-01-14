import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardHeader from "@material-ui/core/CardHeader/CardHeader";


const styles = {
    card: {
        width: 500,
        height: 400,
        marginLeft: '0 auto',
        marginRight: 100,

    },

};

function UserInformation(props) {
    const {classes} = props;
    return (

        <Card className={classes.card}>

            <CardHeader title={" Personal information"}/>
            <AccountCircle fontSize="large"/>

            <Typography variant="h6" component="p">
                First name : {props.firstName}
            </Typography>
            <Typography variant="h6" component="p">
                Second name : {props.secondName}
            </Typography>
            <Typography variant="h6" component="p">
                Birthday : {props.birthday}
            </Typography>
            <Typography variant="h6" component="p">
                Address : {props.address}
            </Typography>
            <Typography variant="h6" component="p">
                E-mail : {props.eMail}
            </Typography>
        </Card>
    );
}


UserInformation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInformation);