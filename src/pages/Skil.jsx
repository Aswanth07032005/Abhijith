import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <h2 className="section-title">My Skills</h2>

        {/* Frontend */}
        <div className="skills-box">
          <h3>Frontend Development</h3>
          <div className="skills-list">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript (ES6+)</span>
            <span>React.js</span>
            <span>Redux</span>
            <span>Bootstrap</span>
            <span>Sass</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-box">
          <h3>Tools & Platforms</h3>
          <div className="skills-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>Figma</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-box">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Problem Solving</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;