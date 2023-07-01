import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="conatiner-1">
         <img src="https://simplidistance.com/wp-content/uploads/2022/07/sd-new-rounded-logo.png" sizes="(max-width: 349px) 100vw, 349px" alt="" />
        </div>
        <div className="conatiner-2">
          <div className="navbar-text">Home</div>
          <div className="navbar-text">About</div>
          <div className="navbar-text">Blogs</div>
          <div className="navbar-text">Contact</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
