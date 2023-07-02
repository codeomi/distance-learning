import React from "react";
import "./card1.scss";
import fire from "../../assets/fire.svg";
import CountUp from 'react-countup';

const Card1 = ({img, title, para}) => {
  return (
    <>
      <div className="card1-container" >
        <div className="card-1-img">
          {img}
        </div>
        <div className="heading-3"><CountUp duration={5} end={title} />+</div>
        <div className="card-para">{para}</div>
      </div>
    </>
  );
};

export default Card1;
