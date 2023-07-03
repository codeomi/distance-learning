import React,{useState} from "react";
import Tilt, { Axis } from "react-parallax-tilt";
import "./collegePage.scss";

const College = () => {
    const [axisEnabled, toggleAxis] = useState('y');
  return (
    <>
      {" "}
      <div className="college-page">
        <Tilt tiltAxis={axisEnabled}>
          <img
            className="clg-img"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </Tilt>
      </div>
    </>
  );
};

export default College;
