import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import UserHeader from "../../Header/UserHeader";
import AdminSpecificTasks from "./AdminSpecificTasks"
import UserInformation from "./UserInformation"
import Grid from '@material-ui/core/Grid';
import './AccountPage.css'
import List from '@material-ui/core/List';

const styles = theme => ({
    item: {
        padding: '10px 10px 20px 100px !important',
        width: "100%",
        height: 300,
    },

    // paper: {
    //     width: 500,
    //     height: 300,
    // },

    container: {
        padding: 30,
        flexGrow: 1,
        marginTop: '20px',
        marginLeft: '11%',

    }
});

class MyAccountPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return (
            <div>
                <UserHeader searching={true} buying={false}
                            handleShoppingCart={this.handleShoppingCart}/>
                <List container className={classes.container} spacing={24}>

                    <Grid className={classes.item} item xs={4}>
                        <UserInformation className={classes.paper}
                                         firstName={localStorage.getItem("firstName")}
                                         secondName={localStorage.getItem("secondName")}
                                         birthday={localStorage.getItem("birthday")}
                                         address={localStorage.getItem("address")}
                                         eMail={localStorage.getItem("eMail")}
                        />
                    </Grid>
                    {localStorage.getItem("role") === "admin" ?
                        <Grid className={classes.item} item xs={4}>
                            <AdminSpecificTasks className={classes.paper}/>
                        </Grid> : null}

                </List>
            </div>
        );
    }

}

export default withStyles(styles)(MyAccountPage);

MyAccountPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
