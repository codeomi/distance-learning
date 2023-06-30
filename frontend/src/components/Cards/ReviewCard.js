import React from "react";
import "./reviewCard.scss";

const ReviewCard = () => {
  return (
    <>
      <div className="review-card">
          <img className="review-user-img" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
        <div className="review-description">
          <div className="review-para">
            Couldn't have asked for a better tool! SimplyDistance made my
            decision process so much easier.
          </div>
          <div className="review-author">-Robert</div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
