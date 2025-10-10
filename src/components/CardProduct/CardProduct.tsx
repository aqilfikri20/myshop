import React from "react";
import "./card-product.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


export default function CardProduct( {name, price} : {name: string, price: string} ){
    return(
        <div className="card-product">
            <div className="wrap-image-product">
                <div className="image-product">
                <Image
                    src="/products/laptop1.jpg"
                    alt="product"
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                />
                </div>
                <button className="like-product"><FaHeart /></button>
            </div>
            <div className="name-product">{name}</div>
            <div className="price-product">{price}</div>
            <div className="rating-product">4,9 <FaStar /> - 200 purchase</div>
            <div className="info-product">Best Seller</div>
            <div className="name-shop">Toko Atma Jaya</div>
        </div>
    )
}