import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {powerUserRequests} from "../../../../BACKEND";
import List from '@material-ui/core/List';
import PowerUserRequest from './PowerUserRequest';
import DialogWindow from "../../../Utils/DialogWindow"


const styles = theme => ({
    item: {
        padding: '10px 10px 20px 100px !important',
    },
    container: {
        padding: 30,
        flexGrow: 1,
    }
});

export class PowerUserRequestList extends React.Component {

    constructor(props) {

        super(props);
        this.state={
            powerUserRequests: [...powerUserRequests],
            confirmation: false
        }
    }

    handleConfirmation = () =>{
        this.setState({confirmation: false})
    }

    onUserDelete = (userName) => {
        let activeUsers = this.state.powerUserRequests.filter(requestingUser => requestingUser.user !== userName)
        this.setState({powerUserRequests: activeUsers})
        this.setState({confirmation: true})
        
    }
    render() {

        const {classes} = this.props;
        let confirmation =
            <DialogWindow 
                open={this.state.confirmation}
                onClose={this.handleConfirmation}
                title="Operation completed successfully!">
            </DialogWindow>
        return (
            <div>
            <List container className={classes.container} spacing={200} >
                {this.state.powerUserRequests.map((value, index) => (
                    <Grid key={index} item xs={4} className={classes.item}>
                        <PowerUserRequest onUserDelete={this.onUserDelete} subject={value.subject} user={value.user} date={value.date} message={value.message}/>
                    </Grid>
                ))}
                
            </List>
            {confirmation}
            </div>
            
        );
    }
}

PowerUserRequestList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PowerUserRequestList);
