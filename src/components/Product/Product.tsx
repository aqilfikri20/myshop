import React from "react";
import "./product.css";
import CardProduct from "../CardProduct/CardProduct";

export default function Product(){

    const products = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(i + 1) * 10}`
  }));

    return(
        <div className="wrap-product">
            <div className="text-find"><p>Find By</p></div>
            <div className="wrap-find">
                <div className="name-find"><p>Recommend For you</p></div>
                <div className="name-find"><p>Top Best Seller</p></div>
                <div className="name-find"><p>Top Rated</p></div> 
                <div className="name-find"><p>Discount</p></div>
            </div>

            <div className="wrap-card-product">
                {products.map((product) => (
                    <CardProduct key={product.id} name={product.name} price={product.price} />
                ))}
            </div>

        </div>
    )
}