import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader/CardHeader";


const styles = {
    card: {
        width: 345,
        height: 430
    },
    media: {
        height: 250,
        width: 345
    },
};

function ShopItem(props) {
    const {classes} = props;
    return (
        <Card className={classes.card}>

            <CardHeader
                title={props.title}/>

            <CardActionArea>
                <CardMedia style={styles}
                           className={classes.media}
                           image={props.image}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.price + " Cluj coins"}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add to basket
                </Button>
            </CardActions>
        </Card>
    );
}

ShopItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopItem);