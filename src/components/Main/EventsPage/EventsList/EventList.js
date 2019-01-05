import React from 'react';
import './EventList.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Event from "./Event/Event";
import {eventItems} from "../../../../BACKEND";
import List from '@material-ui/core/List';


const styles = theme => ({
    item: {
        padding: '10px 10px 20px 100px !important',
    },
    container: {
        padding: 30,
        flexGrow: 1,
    }
});

class EventList extends React.Component {


    render() {

        const {classes} = this.props;

        return (
            <List container className={classes.container} spacing={200} >
                {eventItems.map((value, index) => (
                    <Grid key={index} item xs={4} className={classes.item}>
                        <Event  title={value.title} image={value.image}
                                description={value.description}
                                />
                    </Grid>
                ))}
            </List>
        );
    }
}

EventList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventList);
