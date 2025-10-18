//Product.tsx
import React from "react";
import "./product.css";
import CardProduct from "../CardProduct/CardProduct";
import WrapCardProduct from "./WrapCardProduct";

export default function Product(){

    return(
        <div className="wrap-product">
            <div className="text-find"><p>Find By</p></div>
            <div className="wrap-find">
                <div className="name-find"><p>Recommend For you</p></div>
                <div className="name-find"><p>Top Best Seller</p></div>
                <div className="name-find"><p>Top Rated</p></div> 
                <div className="name-find"><p>Discount</p></div>
            </div>

            <WrapCardProduct/>
        </div>
    )
}