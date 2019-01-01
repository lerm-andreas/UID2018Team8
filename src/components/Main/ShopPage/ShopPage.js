import React, {Component} from "react";
import UserHeader from "../../Header/UserHeader";
import ShopList from "./ShopList/ShopList";
import MyModal from "./ShoppingCart/ShoppingCartModal";

export class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsToBuy: [],
            showShoppingCart: false
        };
        this.addToShoppingCart = this.addToShoppingCart.bind(this);
        this.handleShoppingCart = this.handleShoppingCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addToShoppingCart = (index) => {
        this.state.itemsToBuy.push(index);
        alert('Added index ' + index + ' to cart');
    };

    handleShoppingCart = () => {
        this.setState(prevState => ({
            showShoppingCart: !prevState.showShoppingCart
        }));
    };

    closeModal = () => {
        this.setState({showShoppingCart: false})
    };

    render() {
        return (
            <div className="shopPage">
                <UserHeader buying={true} searching={false}
                            handleShoppingCart={this.handleShoppingCart}/>
                <ShopList addToShoppingCart={this.addToShoppingCart}/>
                <MyModal open={this.state.showShoppingCart} onClose={this.closeModal}/>
            </div>
        )
    }
}

