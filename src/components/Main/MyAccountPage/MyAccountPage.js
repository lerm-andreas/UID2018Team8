import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UserHeader from "../../Header/UserHeader";
import AdminSpecificTasks from "./AdminSpecificTasks"
import UserInformation from "./UserInformation"
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    root: {
        padding: 30,
        flexGrow: 1,
        
    }
});

export class MyAccountPage extends Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.root}>
                <UserHeader  searching={true} buying={false} handleShoppingCart={this.handleShoppingCart}/>
                
                    <AdminSpecificTasks button="hauhau"/>
                    <UserInformation 
                        
                        firstName="Georgel"
                        secondName="Pula"
                        birthday="18.08.1996"
                        address="Strada Bucuresti nr. 70A"
                        eMail="georgel@gmail.com"
                    />
            </Grid>
        );
    }

}

MyAccountPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAccountPage);