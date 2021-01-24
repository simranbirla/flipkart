import React from "react";
import "../Style/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          width="75px"
          alt="logo for flipkart"
        />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header_right">
        <p className="header_right-login">Login</p>
        <p>
          <i className="fas fa-shopping-cart"></i> Cart
        </p>
      </div>
    </div>
  );
};

export default Header;
