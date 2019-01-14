import React, {Component} from "react";
import UserHeader from "../../Header/UserHeader";
import ShopList from "./ShopList/ShopList";
import ShoppingCartModal from "./ShoppingCart/ShoppingCartModal";
import DialogWindow from "../../Utils/DialogWindow";
import ConfirmationDialog from "../../Utils/ConfirmationDialog";

export class ShopPage extends Component {

    addItemToShoppingCart = (itemIndexPair) => {
        this.state.itemsToBuy.push(itemIndexPair);
        this.setState({showConfirmationDialog: true})
    };
    closeConfDialog = () => {
        this.setState({showConfirmationDialog: false})
    };

    constructor(props) {
        super(props);
        this.state = {
            itemsToBuy: [],
            showShoppingCart: false,
            showDialogWindow: false,
            showConfirmationDialog: false
        };
        this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
        this.handleShoppingCart = this.handleShoppingCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeDialogWindow = this.closeDialogWindow.bind(this);
        this.handleBuyRequest = this.handleBuyRequest.bind(this);
        this.handleFinalBuyRequest = this.handleFinalBuyRequest.bind(this);
    }

    handleBuyRequest = (total) => {
        if (total < localStorage.getItem('coins'))
            this.setState({successful: true});
        else
            this.setState({successful: false});
        this.setState({total: total, showDialogWindow: true})
    };

    handleFinalBuyRequest() {
        let myCoins = localStorage.getItem('coins');
        if (this.state.successful) {
            localStorage.setItem('coins', myCoins - this.state.total);
            this.setState({itemsToBuy: [], showShoppingCart: false, showDialogWindow: false})
        }
    }

    handleShoppingCart = () => {
        this.setState(prevState => ({
            showShoppingCart: !prevState.showShoppingCart
        }));
    };

    closeModal = () => {
        this.setState({showShoppingCart: false})
    };

    closeDialogWindow = () => {
        this.setState({showDialogWindow: false})

    };

    render() {

        let dialogWindow = this.state.successful ?
            <DialogWindow open={this.state.showDialogWindow} onClose={this.closeDialogWindow}
                          title={"Making a purchase"}
                          description={"Are you sure you would like to make the purchase?" +
                          " A sum of " + this.state.total + " Cluj coins will be deducted" +
                          " from your account"}
                          option1={"YES"}
                          option2={"NO"}
                          onOption1={() => this.handleFinalBuyRequest(this.state.total)}
                          onOption2={this.closeDialogWindow}/> :
            <DialogWindow open={this.state.showDialogWindow} onClose={this.closeDialogWindow}
                          title={"Making a purchase failed"}
                          description={"You don't have enough Cluj coins to make this purchase." +
                          " Try contributing more to the community and try again :)"}
            />;

        return (
            <div style={{width: '98%', margin: 'auto'}}>
                <UserHeader buying={true} searching={false}
                            handleShoppingCart={this.handleShoppingCart}/>
                <ShopList addItemToShoppingCart={this.addItemToShoppingCart}/>
                <ShoppingCartModal open={this.state.showShoppingCart} onClose={this.closeModal}
                                   itemsToBuy={this.state.itemsToBuy}
                                   handleBuyRequest={this.handleBuyRequest}/>
                {dialogWindow}
                <ConfirmationDialog open={this.state.showConfirmationDialog}
                                    onClose={this.closeConfDialog}
                                    description={"Item added to the basket"}/>
            </div>
        )
    }
}

