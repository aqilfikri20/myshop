import Image from "next/image";
import "./heading.css"
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

                </div>

                <div className="text-search">
                    
                </div>

                <div className="button-search">
                    
                </div>
            </div>
        </div>

        <div className="phone">

        </div>

        <div className="icon-right">

        </div>
    </div>
   ) 
}