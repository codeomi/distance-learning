import React from "react";
import "./section5.scss";
import NewsletterCard from "../../Cards/NewsletterCard";

const Section5 = () => {
  return (
    <>
      <div className="section5">
        <div className="section-container">
          <div className="heading-1">Newsletter</div>
          <div className="newsletter-card-wrapper">
            <NewsletterCard heading="How online learning can power lifelong goals" />
            <NewsletterCard heading="How online learning can power lifelong goals" />
            <NewsletterCard heading="How online learning can power lifelong goals" />
          </div>
          <div className="subscription-container">
            <div className="heading-3">Stay Updated</div>
            <div className="subscription-form">
              <input
                className="email-input"
                type="email"
                placeholder="johndoe@gmail.com"
                typeof="input"
              ></input>
              <div className="btn-2">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
