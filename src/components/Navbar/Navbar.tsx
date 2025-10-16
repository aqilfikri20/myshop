import "./navbar.css"
import Link from "next/link";
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="wrap-nav-left">
                <ul  className="nav-left">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/help">Help</Link></li>
                </ul>
            </div>

            <div className="wrap-nav-right">
                <ul className="nav-right">
                    <li>Sell on Swoo</li>
                    <li>Order Tracking</li>
                    <li>Recently View</li>
                </ul>
            </div>

        </div>
    )
}