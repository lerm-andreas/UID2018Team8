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
import ReportedUserMessage from "./ReportedUserMessage"
import Icon from "@material-ui/core/Icon/Icon";

const styles = {
    card: {
        width: 1000,
        height: 120,
        marginLeft:'0 auto',
        marginRight: 100,
    },
   
};

class ReportedUser extends React.Component {
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
                                X
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText align="left"><b>Reporter : </b>{this.props.reporter}</ListItemText>     
                        <ListItemText align="left"><b>Reported user : </b> {this.props.reportedUser}</ListItemText>
                       
                       
                        <Button onClick = {this.handleRespondButtonClick} variant="contained" color="secondary" className={classes.button}>
                            {this.state.showRequestMessage ? "Hide" : "View"}
                        </Button>
                        
                        </ListItem>
                        
                    </List>
                  
            </Card>
            {this.state.showRequestMessage ?
            <ReportedUserMessage onUserDelete={this.props.onUserDelete} reportedUser={this.props.reportedUser} message = {this.props.message}/> : null}
            </div>
            
        )
    }    
}

ReportedUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportedUser);