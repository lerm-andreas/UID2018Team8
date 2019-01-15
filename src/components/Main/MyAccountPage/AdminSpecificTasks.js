import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {withRouter} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import {managePowerUsersPageUrl, banUsersPageUrl} from "../../../BACKEND";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  card: {
    width: 1200,
    height: 300,
},
});

class AdminSpecificTasks extends React.Component {
  
    constructor(props) {
        super(props);
    }

    routeToBanUsersPage(){
        console.log(this)
        this.props.history.push(banUsersPageUrl)

    }

    routeToManageUsersPage(){
        this.props.history.push(managePowerUsersPageUrl)
    }
  
    render(){
        const { classes } = this.props;
        return (
            <Card  className={classes.card}>
                
            <Typography variant="h4" gutterBottom>
                 Administrator tasks 
            </Typography>
            <Button onClick={this.routeToBanUsersPage.bind(this)} variant="contained" color="secondary" className={classes.button}>
                Ban users
            </Button>
              <br/>
            <Button onClick={this.routeToManageUsersPage.bind(this)} variant="contained" color="primary" className={classes.button}>
                Manage power users
            </Button>
            </Card>
          );
        }
    }
  



AdminSpecificTasks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(AdminSpecificTasks));