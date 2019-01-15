import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {reportedUsers} from "../../../../BACKEND";
import List from '@material-ui/core/List';
import ReportedUser from './ReportedUser';
import DialogWindow from "../../../Utils/DialogWindow"


const styles = theme => ({
    item: {
        padding: '10px 10px 20px 100px !important',
    },
    container: {
        padding: 30,
        flexGrow: 1,
        marginLeft: '10%',

    }
});

export class ReportedUserList extends React.Component {

    onUserDelete = (userName) => {
        let activeUsers = this.state.reportedUsers.filter(user => user.reportedUser !== userName)
        this.setState({reportedUsers: activeUsers})
        this.setState({confirmation: true})

    }
    handleConfirmation = () => {
        this.setState({confirmation: false})
    }

    constructor(props) {

        super(props);
        this.state = {
            reportedUsers: [...reportedUsers],
            confirmation: false
        }
    }

    render() {

        const {classes} = this.props;
        let confirmation =
            <DialogWindow
                open={this.state.confirmation}
                onClose={this.handleConfirmation}
                title="Operation completed successfully!">
            </DialogWindow>;
        return (
            <div>
                <List container className={classes.container} spacing={200}>
                    {this.state.reportedUsers.map((value, index) => (
                        <Grid key={index} item xs={4} className={classes.item}>
                            <ReportedUser onUserDelete={this.onUserDelete} reporter={value.reporter}
                                          reportedUser={value.reportedUser}
                                          message={value.message}/>
                        </Grid>
                    ))}
                </List>
                {confirmation}
            </div>
        );
    }
}

ReportedUserList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportedUserList);
