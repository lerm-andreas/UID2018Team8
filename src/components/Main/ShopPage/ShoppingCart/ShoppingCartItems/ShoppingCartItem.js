import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({});

const ShopItem = (props) => {
    let descr = `${props.quantity} Units * ${props.price} Cluj coins`;
    return (<ListItem>
            <ListItemText primary={props.title} secondary={descr}/>
            <IconButton onClick={props.decreaseItemCount} disabled={props.quantity === 0}>
                <Icon>remove_circle_outline</Icon>
            </IconButton>
            <IconButton onClick={props.increaseItemCount}>
                <Icon> add_circle_outline</Icon>
            </IconButton>
        </ListItem>
    )
};


export default withStyles(styles)(ShopItem);