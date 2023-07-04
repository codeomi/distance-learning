import React from "react";
import "./navbar.scss";
import { Link, useLocation, useParams } from "react-router-dom";


const Navbar = () => {
  
  const location = useLocation();

  const isActiveLink = (link) => {
    const { pathname } = location;
    return pathname === link ? "active" : "";
  };

  console.log(location)
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
            <Link to="/"  className={`navbar-text ${isActiveLink("/")}`}>
              Home
            </Link>
            <Link to="/about"  className={`navbar-text ${isActiveLink("/about")}`}>
              About
            </Link>
            <Link to="/blogs"  className={`navbar-text ${isActiveLink("/blogs")}`}>
              Blogs
            </Link>
            <Link to="/contact"  className={`navbar-text ${isActiveLink("/contact")}`}>
              Contact
            </Link>
          </div>
        </div>
     
    </>
  );
};

export default Navbar;
