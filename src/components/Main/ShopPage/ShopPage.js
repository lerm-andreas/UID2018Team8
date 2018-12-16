import React from "react";
import UserHeader from "../../Header/UserHeader";
import ShopList from "./ShopList/ShopList";

export const ShopPage = () => {
    return (
        <div className="shopPage">
            <UserHeader/>
            <ShopList/>
        </div>
    )
};

