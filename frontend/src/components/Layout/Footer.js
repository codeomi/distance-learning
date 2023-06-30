import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-link-container">
            <div className="footer-container-heading">
              More at Simplidistance
            </div>
            <div className="footer-container-para">About Simplidistance</div>
            <div className="footer-container-para">Career</div>
            <div className="footer-container-para">FAQ</div>
            <div className="footer-container-para">Career</div>
          </div>
          <div className="footer-link-container">
            <div className="footer-container-heading">Others</div>
            <div className="footer-container-para">Privacy Policy</div>
            <div className="footer-container-para">Cookie Policy</div>
            <div className="footer-container-para">Terms And Conditions</div>
            <div className="footer-container-para">Grievances</div>
          </div>
          <div className="footer-link-container">
            <div className="footer-container-heading">Important Links</div>
            <div className="footer-container-para">UGC-DEB</div>
            <div className="footer-container-para">Swayam</div>
            <div className="footer-container-para">Ministry of Education</div>
            <div className="footer-container-para">
              National Digital Library of India
            </div>
          </div>
        </div>
        
      </div>
      {/* <div className="sub-footer">
            <div className="copyright">
            Copyright © 2023 Ideovate Research Pvt Ltd
            </div>
        </div> */}
    </>
  );
};

export default Footer;
