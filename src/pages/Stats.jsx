import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center">

          <Col md={3} className="stat-box" data-aos="zoom-in">
            <h3>1+</h3>
            <p>Years Learning</p>
          </Col>

          <Col md={3} className="stat-box" data-aos="zoom-in" data-aos-delay="100">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </Col>

          <Col md={3} className="stat-box" data-aos="zoom-in" data-aos-delay="200">
            <h3>6+</h3>
            <p>Technologies</p>
          </Col>

          <Col md={3} className="stat-box" data-aos="zoom-in" data-aos-delay="300">
            <h3>1</h3>
            <p>Internship</p>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Stats;