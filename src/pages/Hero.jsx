import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import Stats from "./Stats";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import About from "./About";
import Education from "./Education";
import Skills from "./Skil";

const Hero = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center">

            {/* LEFT */}
            <Col lg={6} className="hero-left">
              <h1 className="fade-up">
                Hi, I'm <span>Abhijith Manoj</span>
              </h1>

              <h2 className="fade-up delay-1">
                React Developer & UI Enthusiast
              </h2>

              <p className="fade-up delay-2">
                I specialize in building modern, responsive, and high-performance
                web applications using React.js. I love crafting clean UI designs
                and smooth user experiences that feel intuitive and fast.
              </p>

              <p className="fade-up delay-3">
                Currently focused on frontend development, component-based architecture,
                and improving my skills in full-stack web development.
              </p>

              <div className="hero-tags fade-up delay-4">
                <span>⚡ React.js</span>
                <span>⚡ JavaScript</span>
                <span>⚡ HTML & CSS</span>
                <span>⚡ UI/UX Design</span>
              </div>
            </Col>

            {/* RIGHT */}
            <Col lg={6} className="hero-right">
              <div className="hero-image zoom-in">
                <img src="/Use.png" alt="Abhijith Manoj" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <Stats />
      <About />
      <Education/>
      <Skills/>
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Hero;