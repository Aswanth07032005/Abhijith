import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>

        <div className="footer-content">

          {/* LEFT */}
          <div className="footer-left">
            <h4>Abhijith Manoj</h4>
            <p>React Developer building modern web applications</p>
          </div>

          {/* CENTER */}
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* RIGHT */}
          <div className="footer-social">

            {/* GitHub (add your username) */}
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* LinkedIn FIXED */}
            <a 
              href="https://www.linkedin.com/in/abhijithmanoj10/" 
              target="_blank" 
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a href="mailto:abhijithmanojkotta@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* bottom */}
        <div className="footer-bottom">
          <p>© 2026 Abhijith Manoj. All rights reserved.</p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;