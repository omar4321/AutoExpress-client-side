import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Banner.css';

const Banner = () => {
  return (
    <div id="banner">
      <Container fluid>
        <Row className="align-items-center justify-content-center banner">
          <Col md={4} className="p-md-5 order-2 order-md-1">
            <Fade left duration={2000} distance="40px">
              <h2>
                We Sales Car <br /> Your Favorite Brands
              </h2>
              <p className=" my-4 pr-md-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the
              </p>
              <Button className="btn-main" href="#services">
                Get Started
              </Button>
            </Fade>
          </Col>
          <Col md={6} className="order-1 order-md-2">
            <Fade right duration={2000} distance="40px">
              <Image
                src="https://i.ibb.co/PrKgs9q/flat-car-salesman-with-contract-document-23-2147876285-removebg-preview.png"
                fluid
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
