import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
        <div className="navbar">
          <Link to="/" className="conatiner-1">
            <img
              src="https://simplidistance.com/wp-content/uploads/2022/07/sd-new-rounded-logo.png"
              sizes="(max-width: 349px) 100vw, 349px"
              alt=""
            />
          </Link>
          <div className="conatiner-2">
            <Link to="/" className="navbar-text">
              Home
            </Link>
            <Link to="/about" className="navbar-text">
              About
            </Link>
            <Link to="/blogs" className="navbar-text">
              Blogs
            </Link>
            <Link to="/contact" className="navbar-text">
              Contact
            </Link>
          </div>
        </div>
     
    </>
  );
};

export default Navbar;
