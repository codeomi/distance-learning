import React from "react";
import "./about.scss";
import CountUp from 'react-countup';

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-page-container">
          <div className="about-heading-container">
            <div className="about-heading">About</div>
          </div>
          <div className="about-para-container">
            <div className="about-para">
              SimpliDistance is a one-stop-solution for students/working
              professional/ businessmen/woman/housewife’s looking to pursue
              undergraduate (UG) and postgraduate (PG) courses in Online and
              Distance learning mode to upgrade their knowledge & skills to grow
              in their career. <br /> <br />
              I explore I upgrade I grow is the mantra of SimpliDistance.com
              where you get information of anything & everything in distance
              education.
              <br /> <br />
              SimpliDistance.com is a brainchild of Ideovate Research Pvt Ltd a
              company established by young professionals with expertise in the
              domain of education, digital world, career guidance & human
              psychology.
              <br /> <br />
              SimpliDistance is India’s ONLY dedicated portal for distance
              education where the visitor can explore more that 1000 UG/PG
              course 500+ certifications, 100+ approved universities/institutes
              courses in Online and Distance learning mode with a personalized
              experience.
              <br /> <br />
              SimpliDistance also aims to help visitors in career mapping &
              personalized guidance experience with the use of technology &
              suggest suitable courses to upgrade their knowledge/skills to grow
              in their career.
              <br /> <br />
              SimpliDistance is a neutral platform where you will get
              authentic/genuine & updated information about not only the
              courses, universities & institutes but also the government
              policies latest trends in India & globally in the field of
              distance education. It will also closely work with the industry
              and educationists for industry requirement mapping and helping
              students / working professionals to upgrade their skills as per
              industry requirement.
              <br /> <br />
            </div>
          </div>
          <div className="countdown-container-main">
            <div className="countdown-container">
              <div className="countdown"><CountUp duration={3} end={1000} />+</div>
              <div className="countdown-text">Institions Listed</div>
            </div>
            <div className="countdown-container ">
              <div className="countdown yellow"><CountUp duration={3} end={500} />+</div>
              <div className="countdown-text">Courses</div>
            </div>
            <div className="countdown-container">
              <div className="countdown"><CountUp duration={3} end={800} />+</div>
              <div className="countdown-text">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
