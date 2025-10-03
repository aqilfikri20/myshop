import React from "react";
import "./footer.css"
import { FaYoutubeSquare,FaTwitterSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
  <div className="wrap-footer">
    <div className="footer">
        <div className="footer1">
        <h4>SWOO - 1ST INDO TECH ONLINE MARKET</h4>
        <p>Hotline</p>
        <p className="p-number">082161871509</p>
        <p>Blang Pulo, Muara Satu, Lhokseumawe</p>
        <p>Indonesia</p>
        <p>swoo@gmail.com</p>
        <div className="footer-contact">
            <FaYoutubeSquare />
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
        </div>
    </div>
    <div className="footer2">
        <h4>TOP CATEGORIES</h4>
        <p>Laptops</p>
        <p>PC & Computers</p>
        <p>Cell Phone</p>
        <p>Tablets</p>
        <p>Gaming & VR</p>
        <p>Networks</p>
        <p>Cameras</p>
        <p>Office</p>
    </div>
    <div className="footer3">
        <h4>COMPANY</h4>
        <p>About Us</p>
        <p>Contact</p>
        <p>Career</p>
        <p>Sitemap</p>
        <p>Store Location</p>
    </div>
    <div className="footer4">
        <h4>HELP CENTER</h4>
        <p>Customer Service</p>
        <p>Policy</p>
        <p>terms & Conditions</p>
        <p>Trach Order</p>
        <p>FAQs</p>
        <p>My Account</p>
        <p>Product Support</p>
    </div>
    <div className="footer5">
        <h4>PARTNER</h4>
        <p>Become Seller</p>
        <p>Affiliate</p>
        <p>Advertise</p>
        <p>Partnership</p>
    </div>
    </div>
  </div>
)
}