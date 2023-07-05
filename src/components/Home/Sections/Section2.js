import React from "react";
import "./section2.scss";
import Logo from "../../Cards/Logo";
import Card1 from "../../Cards/Card1.js";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Section2 = () => {
  return (
    <>
      <div className="section2" data-aos="fade-right">
        <div className="section-container">
          <div className="section-description">
            <div className="heading-1">Featured Institutes</div>
            <div className="para-container">
              Explore the best institutes which are offering Online and Distance
              learning MBA and BBA courses in India.
            </div>
          </div>
          <div className="logo-container-wrapper" data-aos="fade-left">
            <Logo logo="" />
            <Logo logo="" />
            <Logo logo="" />
            <Logo logo="" />
            <Logo logo="" />
            <Logo logo="" />
            <Logo logo="" />
          </div>
          <div className="container-wrapper">
            <Card1 img={<LocalFireDepartmentIcon color="warning" fontSize="large"/>} title="1000" para="Institutions Listed"/>
            <Card1 className="dark-card"img={<LanguageIcon color="primary" fontSize="large"/>} title="1500" para=" Courses"/>
            <Card1 img={<WorkspacePremiumIcon fontSize="large"/>} title='800' para="Certifications"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
