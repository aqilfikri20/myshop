"use client"
//WrapCardProduct.tsx
import React, {useEffect, useState} from "react";
import "./product.css";
import CardProduct from "../CardProduct/CardProduct";

interface Product {
  product_id: number;
  product_name: string;
  store_name:string;
  price: number;
  image_url: string;
}

export default function WrapCardProduct(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("http://localhost:4000/api/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Gagal Mendapatkan Produk", err);
            setLoading(false)
        })
    }, [])

    return(
        <>
            <div className="wrap-card-product">
                {products.map((products) => (
                    <CardProduct key={products.product_id} 
                    name={products.product_name} 
                    price={`Rp ${products.price.toLocaleString("id-ID")}`}
                    store={products.store_name}
                    imageURL={products.image_url}/>
                    
                ))}
            </div>
        </>
    )
}