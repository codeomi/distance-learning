import React from "react";
import "./newsLetterBigCard.scss";
import { Link } from "react-router-dom";

const NewsLetterBigCard = ({ heading }) => {
  return (
    <>
      {" "}
      <Link to={`/newsletter/:${heading}`} >
        <div className="NewsLetterBigCard" data-aos="fade-up">
          <div className="NewsLetterBigCard-ccontainer">
            <div className="NewsLetterBigCard-img-container">
              <img
                src="https://simplidistance.com/wp-content/uploads/2023/01/4-2.jpg"
                className="NewsLetterBigCard-img" alt="blog img"
              ></img>
            </div>
            <div className="NewsLetterBigCard-heading">
              Distance MBA Course & Everything You Need to Know
            </div>
            <div className="NewsLetterBigCard-para">
              Introduction: In recent years, the popularity of distance MBA
              course has increased significantly. A distance MBA…
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsLetterBigCard;
