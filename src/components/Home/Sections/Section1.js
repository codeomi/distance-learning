import React, { useState } from "react";
import "./section1.scss";
import SearchIcon from "@mui/icons-material/Search";

const Section1 = () => {
  const [isCollegeToggleActive, setIsCollegetoggleActive] = useState(true);
  const [isCourseToggleActive, setIsCoursetoggleActive] = useState(false);

  const toggleFunction = (toggleBtn) => {
    if (toggleBtn === "college") {
      setIsCollegetoggleActive(true);
      setIsCoursetoggleActive(false);
    } else if (toggleBtn === "course") {
      setIsCoursetoggleActive(true);
      setIsCollegetoggleActive(false);
    }
  };
  return (
    <>
      <div className="section1">
        <div className="section-container">
          <div className="section-description">
            <div className="heading-2">Simpli Distance</div>
            <div className="para-container">
              India’s ONLY Dedicated Portal for Distance & Online Education!
              Explore the best Online and Distance learning MBA and BBA programs
              by prestigious business schools in India.
            </div>
          </div>
          <div className="search-container">
            <div className="toggle-container">
              <div
                className={`toggle-btn ${
                  isCollegeToggleActive ? "toggle-btn-active" : ""
                }`}
                onClick={() => {
                  toggleFunction("college");
                }}
              >
                Search Colleges
              </div>
              <div
                className={`toggle-btn ${
                  isCourseToggleActive ? "toggle-btn-active" : ""
                }`}
                onClick={() => {
                  toggleFunction("course");
                }}
              >
                Search Courses
              </div>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder={`Enter your ${
                  isCollegeToggleActive ? "College" : "Course"
                } name`}
              />
              <div className="search-icon-container">
                <SearchIcon id="search-icon"></SearchIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
