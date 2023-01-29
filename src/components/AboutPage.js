import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <span>about</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          <p>
          Myself Darshan S, an Electronics and Communication Engg. student at NSS College of Engineering, Palakkad. 
          <br></br>This is me trying to find my way through web development at the moment :)
          </p>
        </div>
        <div className="about-right">
          <p>
            This webpage will be updated 
            <span> soon</span>.
            <br></br>
            Queries? Send an email at hello@darshanchaithram.live
          </p>
        </div>
      </div>
      <div class="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
  );
};

export default AboutPage;
