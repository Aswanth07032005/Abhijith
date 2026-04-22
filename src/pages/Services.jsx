import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <Container>

        {/* HEADER */}
        <div className="section-header text-center">
          <h2 data-aos="fade-up">What I Do</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Building modern and responsive web experiences
          </p>
        </div>

        <Row>

          <Col md={4}>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <FaCode className="icon" />
              <h4>Frontend Development</h4>
              <p>
                Creating responsive UI using React, HTML, CSS and JavaScript
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <FaLaptopCode className="icon" />
              <h4>Web Applications</h4>
              <p>
                Building scalable applications with reusable components and API integration
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <FaMobileAlt className="icon" />
              <h4>Responsive Design</h4>
              <p>
                Ensuring smooth experience across mobile, tablet and desktop devices
              </p>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default Services;