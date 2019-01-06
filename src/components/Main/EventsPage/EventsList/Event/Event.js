import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import InviteButton from "./InviteButton"

const styles = {
    card: {
        width: 1600,
        height: 500,
        marginLeft:'0 auto',
        marginRight: 100,
    },
    media: {
        height: 250,
        width: 345
    },
    button: {
        margin: '0 auto ',
    },
    cardArea: {
        height: 380,
        marginTop: '-15px'
    }

};

function Event(props) {
    const {classes} = props;
    return (
        <Card className={classes.card}>
            <CardHeader
                title={props.title}/>
            <CardActionArea className={classes.cardArea}>
                <CardMedia
                    className={classes.media}
                    image={props.image}/>
                <CardContent>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <List>
                <Button className={classes.button}
                        size="small" color="primary"
                        variant='contained'
                        onClick={props.addItemToShoppingCart}>
                    Join event
                </Button>
                <InviteButton/>
                </List>            
        </Card>
    );
}

Event.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Event);