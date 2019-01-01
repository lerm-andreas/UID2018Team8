import React from "react";
import UserHeader from "../../Header/UserHeader";
import ShopList from "./ShopList/ShopList";

export const ShopPage = () => {
    return (
        <div className="shopPage">
            <UserHeader  buying={true} searching={false}/>
            <ShopList/>
        </div>
    )
};

