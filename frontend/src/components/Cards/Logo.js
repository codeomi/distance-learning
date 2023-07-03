import React from "react";
import "./logo.scss";
import Imgae from "../../assets/university-education-logo-design-template-free-vector.jpg";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <>
      <Link to="/college">
        <img className="university-logo" src={Imgae} alt="" />
      </Link>
    </>
  );
};

export default Logo;
