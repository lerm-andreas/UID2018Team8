import React from 'react';
import './ShopList.css'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopItem from "./ShopItem/ShopItem";


const nr_items = 6;
let items = []


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class ShopList extends React.Component {
    state = {
        spacing: '16',
    };


    render() {
        const {classes} = this.props;
        const {spacing} = this.state;


        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center"
                          spacing={Number(spacing)}>
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item sm={3}>
                                <ShopItem/>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container className={classes.demo} justify="center"
                          spacing={Number(spacing)}>
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item sm={3}>
                                <ShopItem/>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

ShopList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShopList);
