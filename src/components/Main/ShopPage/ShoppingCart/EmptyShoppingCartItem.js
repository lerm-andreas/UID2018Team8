import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    item: {
        textAlign: "center"
    }
});


const ShopItem = (props) => {
    const {classes} = props;

    return (<ListItem className={classes.item}>
            <ListItemText primary={props.title}/>
        </ListItem>
    )
};


export default withStyles(styles)(ShopItem);