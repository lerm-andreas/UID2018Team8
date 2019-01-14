import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ShoppingCart from "./ShoppingCart";

const styles = theme => ({
    paper: {
        position: 'absolute',
        outline: 'none',
        top: '40%',
        left: '40%'
    },
});

const SimpleModal = (props) => {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.onClose}>
                <ShoppingCart itemsToBuy={props.itemsToBuy}
                              handleBuyRequest={props.handleBuyRequest}/>
            </Modal>
        </div>
    );
};


SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleModal);

