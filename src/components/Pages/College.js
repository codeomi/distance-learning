import React, { useEffect, useState } from "react";
import Tilt, { Axis } from "react-parallax-tilt";
import "./collegePage.scss";
import Image from "../../assets/university-education-logo-design-template-free-vector.jpg";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Handshake, Place, School, Stars } from "@mui/icons-material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useLocation } from "react-router-dom";

const College = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      {" "}
      <div className="college-page">
        <div className="college-img-container">
          <img
            className="clg-img"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="college-heading-container">
            <img src={Image} className="college-logo"></img>
            <div className="college-name">Manipal University</div>
            <div className="college-address-container">
              <div className="college-address">
                <Place className="college-heading-icons" />
                Rajasthan
              </div>
              <div className="ugc-details">
                <EmojiEventsIcon className="college-heading-icons"></EmojiEventsIcon>
                Approved / Recognized By : UGC
              </div>
            </div>
          </div>
        </div>
        <div className="college-info-blog-container"  data-aos="flip-left">
          <div className="college-info-container">
            <div className="college-info-heading-container">
              <div className="college-heading-icon">
                <TextSnippetIcon></TextSnippetIcon>
              </div>
              <div className="college-info-heading">About</div>
            </div>
            <div className="college-info">
              The Manipal Education and Medical Group is an established leader
              in the field of education, research and healthcare. In a span of
              over six decades, it has transformed the lives of more than
              3,00,000 students from over 59 countries. The group includes five
              Universities – Manipal Academy of Higher Education (MAHE,
              Karnataka), Sikkim Manipal University (Sikkim), American
              University of Antigua (Caribbean Islands), Manipal International
              University (Malaysia) and Manipal University Jaipur (Jaipur).
              Manipal University Jaipur (MUJ) was launched in 2011 on an
              invitation from the Government of Rajasthan, as a self-financed
              State University. MUJ has redefined academic excellence in the
              region, with the Manipal way of learning; one that inspires
              students of all disciplines to learn and innovate through hands on
              practical experience. Jaipur, being one of the fastest growing
              cities in India, has increasing demand for quality higher
              education in the region. Following an allotment of 122 Acres of
              land at Dehmi Kalan village near Jaipur, the permanent campus of
              the University has come up at a fast pace and is by far one of the
              best campuses in the region. The multi-disciplinary university
              offers career-oriented courses at all levels, i.e., UG, PG and
              doctoral and across diverse streams, including Engineering,
              Architecture, Planning, Fashion Design, Interior Design, Fine
              Arts, Hospitality, Humanities, Journalism and Mass Communication,
              Basic Sciences, Law, Commerce, Computer Applications, Management,
              etc. Some PG programmes are also available in the research mode.
              MUJ boasts of best-in-class infrastructure, including
              state-of-the-art research facilities and a modern, digital
              library. In line with Manipal University’s legacy of providing
              quality education to its students, the campus uses the latest in
              technology to impart education.
            </div>
          </div>
          <div className="college-info-container">
            <div className="college-info-heading-container">
              <div className="college-heading-icon">
                <School></School>
              </div>
              <div className="college-info-heading">Scholarships</div>
            </div>
            <div className="college-info">
              
            </div>
          </div>
          <div className="college-info-container">
            <div className="college-info-heading-container">
              <div className="college-heading-icon">
                <Handshake></Handshake>
              </div>
              <div className="college-info-heading">Placements</div>
            </div>
            <div className="college-info">
              
            </div>
          </div>
          <div className="college-info-container">
            <div className="college-info-heading-container">
              <div className="college-heading-icon">
                <Stars></Stars>
              </div>
              <div className="college-info-heading">Reviews</div>
            </div>
            <div className="college-info">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default College;
