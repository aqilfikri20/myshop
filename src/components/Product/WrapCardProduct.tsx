import React from "react";
import "./product.css";
import CardProduct from "../CardProduct/CardProduct";

export default function WrapCardProduct(){
    const products = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(i + 1) * 10}`
  }));
  
    return(
        <>
            <div className="wrap-card-product">
                {products.map((product) => (
                    <CardProduct key={product.id} name={product.name} price={product.price} />
                ))}
            </div>
        </>
    )
}