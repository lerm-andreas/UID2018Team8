import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ShoppingCartItem from "./ShoppingCartItem";
import {shoppingItems} from "../../../../BACKEND";
import EmptyShoppingCartItem from "./EmptyShoppingCartItem";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'inline-block',
        position: 'fixed',
        bottom: 0,
        left: 0,
        margin: '20% 36%',
        width: '30%',
    },
});


class SimpleList extends React.Component {

    constructor(props) {
        super(props);
        this.getDisplayContents = this.getDisplayContents.bind(this);
        this.getItemCounts = this.getItemCounts.bind(this)
    }

    getDisplayContents() {
        if (this.props.itemsToBuy.length === 0)
            return <EmptyShoppingCartItem title={"No items in the cart"}/>;
        else {
            let itemCounts = this.getItemCounts(this.props.itemsToBuy);
            return (Object.keys(itemCounts).map(index => (
                    <ShoppingCartItem title={shoppingItems[index].title}
                                      price={itemCounts[index] * shoppingItems[index].price}/>
                ))
            )
        }
    }


    getItemCounts(itemsToBuy) {
        let counts = {};
        itemsToBuy.forEach((itemIndexPair) => {
            counts[itemIndexPair.index] = counts[itemIndexPair.index] ? counts[itemIndexPair.index] + 1 : 1;
        });
        return counts
    }


    render() {
        const {classes} = this.props;
        let displayContents = this.getDisplayContents();

        return (
            <div className={classes.root}>
                <List component="nav">
                    {displayContents}
                </List>
            </div>
        );
    }


}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);