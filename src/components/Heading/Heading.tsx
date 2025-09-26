import Image from "next/image";
import "./heading.css"
import { FaSearch } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { FaHeart,FaCartPlus, FaUser } from "react-icons/fa";
export default function Heading(){
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
                <FaHeart />
                <FaCartPlus />
                <FaUser />
            </div>
        </div>
    </div>
   ) 
}