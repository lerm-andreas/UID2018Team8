import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    icon: {
        color: "#FB8C00"
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


const Marker = (props) => {

    const {classes} = props;

    return (
        <IconButton aria-label="Delete" className={classes.fab}>
            <Icon className={classes.icon}>place</Icon>
        </IconButton>
    )
};

export default withStyles(styles)(Marker);