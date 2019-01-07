import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  card: {
    width: 500,
    height: 400,
    marginLeft:'0 auto',
    marginRight: 100,
},
});

function AdminSpecificTasks(props) {
  const { classes } = props;
  return (
    
    
    // <div>

    // </div>
    <Card  className={classes.card}>
        
    <Typography variant="h4" gutterBottom>
         Administrator tasks 
    </Typography>
    <Button variant="contained" color="secondary" className={classes.button}>
        Ban users
    </Button>
      <br/>
    <Button variant="contained" color="primary" className={classes.button}>
        Manage power users
    </Button>
    </Card>
  );
}

AdminSpecificTasks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminSpecificTasks);