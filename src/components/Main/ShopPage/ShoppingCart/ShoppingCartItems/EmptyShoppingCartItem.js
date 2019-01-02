import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";

const styles = theme => ({
    item: {
        textAlign: "center"
    }
});


const ShopItem = (props) => {
    const {classes} = props;

    return (<ListItem className={classes.item}>
            <ListItemText primary={props.title}/>
            {props.showCheckout ?
                <IconButton onClick={props.sendBuyRequest}>
                    <Icon>check_circle</Icon>
                </IconButton> :
                null}
        </ListItem>
    )
};


export default withStyles(styles)(ShopItem);