import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
  return (
    <section id="About" className="about-container">
      <Container fluid>
        <Row className="align-items-center justify-content-center banner">
          <Col md={6}>
            <Fade left duration={2000} distance="40px">
              <Image
                src="https://i.ibb.co/5F1t64M/about-removebg-preview.png"
                fluid
                className="about-img"
              />
            </Fade>
          </Col>
          <Col md={4} className="p-md-5 mt-md-0 mt-4">
            <Fade right duration={2000} distance="40px">
              <p>About Our Company</p>
              <h3>How We Can Help you</h3>
              <p className="text-muted my-4 pr-md-5">
                We’d love to help find the car for you, but we’re only available
                in the United States at this time. If you reside in the United
                States and reached this page by accident, please call us at +1
                (855) 864-8736 for assistance.
              </p>
              <Button className="btn-main" href="#pricing">
                Learn More
              </Button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
