import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav-wrapper footer-nav-wrapper--styleTwo">
        <Link
          to={process.env.PUBLIC_URL + "/home"}
          className="footer-nav-single footer-nav-single--styleTwo"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/home.svg"}
            />
          </div>
        </Link>

        <Link
          to={process.env.PUBLIC_URL + "/cart"}
          className="footer-nav-single footer-nav-single--styleTwo active"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/cart.svg"}
            />
          </div>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + "/profile"}
          className="footer-nav-single footer-nav-single--styleTwo"
        >
          <div className="menu-wrapper">
            <ReactSVG
              src={process.env.PUBLIC_URL + "/assets/img/icons/profile.svg"}
            />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
