import React from "react";
import "./section4.scss";
import ReviewCard from "../../Cards/ReviewCard";

const Section4 = () => {
  return (
    <>
      <div className="section4">
        <div className="section-container">
          <div className="heading-1">Reviews</div>
          <div className="review-container card-wrapper">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
