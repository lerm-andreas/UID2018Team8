import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    paper: {
        position: 'absolute',
            width: theme.spacing.unit * 50,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing.unit * 4,
            outline: 'none',
    },
});
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

class InfoModal extends Component {
    render() {
    const {classes} = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open} onClose={this.props.close}>
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        {this.props.title}
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        {this.props.info}
                    </Typography>
                </div>
            </Modal>)
    }
}
export default withStyles(styles)(InfoModal);

