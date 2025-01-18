import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" width={75}/>
          <p>Created By Derman Şenel Gökçe and Zehra Okur</p>
          <div className="footer-content-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>home</li>
            <li>About us </li>
            <li>Delivery</li>
            <li>Privacy Police</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+90 553 775 61 05 </li>
            <li>dermansenel@gmail.com</li>
            <li>zehraokur03@hotmail.com</li>
            <li>+48 451 586 123</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 DermanFOOd- All right deserved
      </p>
    </div>
  );
};

export default Footer; // Ensure the Footer component is exported correctly