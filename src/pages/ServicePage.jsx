import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <section className="services-section" id="services">
      <Container>

        {/* HEADER */}
        <div className="section-header text-center">
          <h2 data-aos="fade-up">Services</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            What I can do for you
          </p>
        </div>

        <Row>

          {/* CARD 1 */}
          <Col md={4}>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <FaCode className="icon" />
              <h4>Frontend Development</h4>
              <p>
                Building responsive and modern UI using React, HTML, CSS and JavaScript.
              </p>
            </div>
          </Col>

          {/* CARD 2 */}
          <Col md={4}>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <FaLaptopCode className="icon" />
              <h4>Web Applications</h4>
              <p>
                Creating scalable applications with reusable components and API integration.
              </p>
            </div>
          </Col>

          {/* CARD 3 */}
          <Col md={4}>
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <FaMobileAlt className="icon" />
              <h4>Responsive Design</h4>
              <p>
                Ensuring smooth experience across mobile, tablet and desktop devices.
              </p>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default ServicesPage;