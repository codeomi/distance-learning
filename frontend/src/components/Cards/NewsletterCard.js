import React from "react";
import "./newletterCard.scss";
import { Link } from "react-router-dom";

const NewsletterCard = ({heading}) => {
  return (
    <>
      <Link to={`/newsletter/:${heading}`}>
        {" "}
        <div className="newletter-card-container" data-aos="flip-left">
          <div className="img-container">
            <img
              className="newsletter-card-img"
              src="https://simplidistance.com/wp-content/uploads/2023/01/4-2.jpg"
              alt=""
            />
          </div>
          <div className="newsletter-heading">
            How Online Learning Can Power Lifelong Learning Goals
          </div>
          <div className="newsletter-para">
            Per quisque montes commodo facilisi aenean fusce sociis fermentum
            sed tristique ma
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsletterCard;
