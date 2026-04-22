import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <h2 className="section-title">Education</h2>

        {/* BCA */}
        <div className="edu-card">
          <h3>BCA (Bachelor of Computer Applications)</h3>
          <p>University of Calicut</p>
          <span>2021 - 2024</span>
        </div>

        {/* Plus Two */}
        <div className="edu-card">
          <h3>Plus Two</h3>
          <p>St. George HSS Kulathuvayal</p>
          <span>2019 - 2021</span>
        </div>

      </div>
    </section>
  );
};

export default Education;