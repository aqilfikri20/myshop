//Heading.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./heading.css"
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { FaHeart,FaCartPlus, FaUser } from "react-icons/fa";
export default function Heading(){
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("userFullName");
    if (name) setUserName(name);
  }, []);

   return(
    <div className="heading">
        <div className="logo">
            <div className="image-logo">
                <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                style={{
                    objectFit: "contain"
                }}
                />
            </div>
        </div>

        <div className="wrap-search">
            <div className="search">
                <div className="category-search">
                      All Category
                </div>

                <div className="text-search">
                    
                </div>

                <div className="button-search">
                    <FaSearch />
                </div>
            </div>
        </div>

        <div className="phone">
            <div className="logo-phone"><GiRotaryPhone /></div>
            <div className="number-phone">
                <p>Hotline 24/7</p>
                <p className="p-number">082161871509</p>
            </div>

        </div>

        <div className="icon-heading">
            <div className="icon-right">
                <div><FaHeart /><p>Liked</p></div>
                <div><FaCartPlus /><p>Cart</p></div>
                <Link href="/login"><div><FaUser /><p>{userName ? userName : "Login"}</p></div></Link>
            </div>
        </div>
    </div>
   ) 
}