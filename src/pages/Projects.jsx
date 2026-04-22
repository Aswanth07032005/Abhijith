import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Container>

        {/* HEADER */}
        <div className="section-header text-center">
          <h2 data-aos="fade-up">Projects</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Some of my recent work
          </p>
        </div>

        <Row>

          {/* Project 1 */}
          <Col md={6} lg={4}>
            <div className="project-card" data-aos="fade-up" data-aos-delay="200">
              <img src="https://innois.in/wp-content/uploads/2024/06/showing-cart-trolley-shopping-online-sign-graphic-scaled.jpg" alt="project" />
              <div className="project-content">
                <h4>E-Commerce App</h4>
                <p>
                  React + Redux based shopping app with cart and product features
                </p>
                <Button size="sm">View</Button>
              </div>
            </div>
          </Col>

          {/* Project 2 */}
          <Col md={6} lg={4}>
            <div className="project-card" data-aos="fade-up" data-aos-delay="300">
              <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/57942d3fa7aa0bedbf978e71f416e35af8dca747" alt="project" />
              <div className="project-content">
                <h4>Admin Dashboard</h4>
                <p>
                  Interactive dashboard with charts and UI components
                </p>
                <Button size="sm">View</Button>
              </div>
            </div>
          </Col>

          {/* Project 3 */}
          <Col md={6} lg={4}>
            <div className="project-card" data-aos="fade-up" data-aos-delay="400">
              <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/19e5d18a20ae1acd3a5e8c74493a1d5c9b22afba/a9aa6dc751cd78227816d116706ed93d9253e020" alt="project" />
              <div className="project-content">
                <h4>Restaurant Menu UI</h4>
                <p>
                  Responsive menu system with smooth UI and navigation
                </p>
                <Button size="sm">View</Button>
              </div>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default Projects;