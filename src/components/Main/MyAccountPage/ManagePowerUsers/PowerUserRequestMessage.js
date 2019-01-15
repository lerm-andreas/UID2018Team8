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
    width: 1000,
    // height: 500,
},
});

class PowerUserRequestMessage extends React.Component {
  
    constructor(props) {
        super(props);
    }
  
    render(){
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                    <div align="left ">{this.props.message}</div>
                    <Button onClick={() => this.props.onUserDelete(this.props.user)} variant="contained" color="primary" className={classes.button}>
                          Accept
                     </Button>
                     <Button onClick={() => this.props.onUserDelete(this.props.user)} variant="contained" color="secondary" className={classes.button}>
                          Deny
                     </Button>
            </Card>    
          );
        }
    }
  



PowerUserRequestMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PowerUserRequestMessage);