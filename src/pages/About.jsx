import React from "react";
import "./About.css"; // optional if you want separate styling

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi! I’m a passionate developer who enjoys building clean, modern,
          and user-friendly web applications. I love turning ideas into
          reality using React, JavaScript, and creative UI design.
        </p>

        <p className="about-text">
          My focus is on writing maintainable code, designing smooth user
          experiences, and continuously learning new technologies to improve
          my craft.
        </p>

        <button className="about-btn">Download Resume</button>
      </div>
    </div>
  );
};

export default About;