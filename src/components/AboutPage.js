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
          Myself Darshan S, an Electronics and Communication Engg. student at NSS College of Engineering, Palakkad. 
          <br></br>I'm a quick learner, trying to find my way through web development at the moment :)
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
    </div>
  );
};

export default AboutPage;
