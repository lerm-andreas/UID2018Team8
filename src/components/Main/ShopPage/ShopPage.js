import React, {Component} from "react";
import UserHeader from "../../Header/UserHeader";
import ShopList from "./ShopList/ShopList";
import ShoppingCartModal from "./ShoppingCart/ShoppingCartModal";
import DialogWindow from "../../Utils/DialogWindow";

export class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsToBuy: [],
            showShoppingCart: false,
            showDialogWindow: false,
        };
        this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
        this.handleShoppingCart = this.handleShoppingCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeDialogWindow = this.closeDialogWindow.bind(this);
        this.handleBuyRequest = this.handleBuyRequest.bind(this);
        this.handleFinalBuyRequest = this.handleFinalBuyRequest.bind(this);
    }

    addItemToShoppingCart = (itemIndexPair) => {
        this.state.itemsToBuy.push(itemIndexPair);
        alert('Added index ' + itemIndexPair.index + ' to cart');
    };

    handleBuyRequest = (total) => {
        this.setState({total: total, showDialogWindow: true})
    };

    handleFinalBuyRequest() {
        let myCoins = localStorage.getItem('coins');
        if (this.state.total <= myCoins) {
            localStorage.setItem('coins', myCoins - this.state.total);
            this.setState({itemsToBuy: [], showShoppingCart: false, showDialogWindow: false})
        }
        else
            alert('Not enough coins for the purchase');
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
        return (
            <div className="shopPage">
                <UserHeader buying={true} searching={false}
                            handleShoppingCart={this.handleShoppingCart}/>
                <ShopList addItemToShoppingCart={this.addItemToShoppingCart}/>
                <ShoppingCartModal open={this.state.showShoppingCart} onClose={this.closeModal}
                                   itemsToBuy={this.state.itemsToBuy}
                                   handleBuyRequest={this.handleBuyRequest}/>
                <DialogWindow open={this.state.showDialogWindow} onClose={this.closeDialogWindow}
                              title={"Are you sure you would like to make the purchase?"}
                              agreeText={"YES"}
                              disagreeText={"NO"}
                              onAgree={() => this.handleFinalBuyRequest(this.state.total)}
                              onDisagree={this.closeDialogWindow}/>
            </div>
        )
    }
}

