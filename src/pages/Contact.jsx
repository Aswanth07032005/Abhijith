import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>

        {/* HEADER */}
        <div className="section-header text-center">
          <h2 data-aos="fade-up">Contact Me</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Let's build something together
          </p>
        </div>

        <Row className="justify-content-center">

          <Col lg={6}>
            <Form className="contact-form" data-aos="fade-up" data-aos-delay="200">

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>

              <Button className="send-btn">Send Message</Button>

            </Form>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default Contact;