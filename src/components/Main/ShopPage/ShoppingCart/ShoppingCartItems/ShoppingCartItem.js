import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({});


const ShopItem = (props) => {
    return (<ListItem>
            <ListItemText primary={props.title} secondary={props.price}/>
            <IconButton>
                <Icon>remove_circle_outline</Icon>
            </IconButton>
            <IconButton>
                <Icon> add_circle_outline</Icon>
            </IconButton>
        </ListItem>
    )
};


export default withStyles(styles)(ShopItem);