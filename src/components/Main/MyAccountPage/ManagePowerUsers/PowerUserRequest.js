import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PowerUserRequestMessage from "./PowerUserRequestMessage"

const styles = {
    card: {
        width: 1000,
        height: 120,
        marginLeft:'0 auto',
        marginRight: 100,
    },
   
};

class PowerUserRequest extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            showRequestMessage: false,
        }
    }

    handleRespondButtonClick = () => {
        this.setState(prevState => ({showRequestMessage : !prevState.showRequestMessage}))
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
            <Card className={classes.card}>
            
                
                    <List>
                    
                    <ListItem>
                    
                        </ListItem>
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircle fontSize="large"/>    
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText align="left"><b>Subject : </b>{this.props.subject}</ListItemText>     
                        <ListItemText align="left"><b>From : </b> {this.props.user}</ListItemText>
                        <ListItemText align="left"><b>Date :</b> {this.props.date}</ListItemText>  
                       
                        <Button onClick = {this.handleRespondButtonClick} variant="contained" color="secondary" className={classes.button}>
                            {this.state.showRequestMessage ? "Hide" : "View"}
                        </Button>
                        </ListItem>
                        
                    </List>
                
            </Card>
            {this.state.showRequestMessage?
            <PowerUserRequestMessage onUserDelete={this.props.onUserDelete} user={this.props.user} message = {this.props.message}/> : null}
            </div>
            
        )
    }    
}

PowerUserRequest.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PowerUserRequest);