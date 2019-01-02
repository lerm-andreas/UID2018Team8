import React from 'react';
import './ShopList.css'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopItem from "./ShopItem/ShopItem";
import {shoppingItems} from "../../../../BACKEND";


const styles = theme => ({
    item: {
        padding: '10px 10px 20px 100px !important',
    },
    container: {
        padding: 30,
        flexGrow: 1,
    }
});

class ShopList extends React.Component {


    render() {

        const {classes} = this.props;

        return (
            <Grid container className={classes.container} spacing={24}>
                {shoppingItems.map((value, index) => (
                    <Grid key={value} item xs={4} className={classes.item}>
                        <ShopItem title={value.title} image={value.image}
                                  description={value.description} price={value.price}
                                  addToShoppingCart={() => this.props.addToShoppingCart({
                                      item: value,
                                      index: index
                                  })}/>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

ShopList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopList);
