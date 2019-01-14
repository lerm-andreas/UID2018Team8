import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        width: 500,
        height: 400,
        marginLeft: '0 auto',
        marginRight: 100,
    },
});

function AdminSpecificTasks(props) {
    const {classes} = props;
    return (
        <Card className={classes.card}>

            <CardHeader
                title={"Administrator tasks"}/>
            <CardContent>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Ban users
                </Button>
                <br/>
                <Button variant="contained" color="primary" className={classes.button}>
                    Manage power users
                </Button>
            </CardContent>
        </Card>
    );
}

AdminSpecificTasks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSpecificTasks);