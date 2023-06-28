import React from "react";
import "./section1.scss";

const Section1 = () => {
  return (
    <>
      <div className="section1">
        <div className="section-container">
          <div className="section-description">
            <div className="heading-1">Simpli Distance</div>
            <div className="para-container">
              India’s ONLY Dedicated Portal for Distance & Online Education!
              Explore the best Online and Distance learning MBA and BBA programs
              by prestigious business schools in India.
            </div>
          </div>
         <div className="search-container">
            <div className="toggle-container">
                <div className="toggle-btn toggle-btn-active">Search Colleges</div>
                <div className="toggle-btn">Search Courses</div>
            </div>
            <div className="search-bar">
                <div type="text" placeholder="Enter your college name" />
            </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
