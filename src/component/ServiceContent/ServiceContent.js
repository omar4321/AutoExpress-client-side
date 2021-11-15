import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const ServiceContent = (props) => {
  const { img, name, description, price, _id } = props.service || {};
  return (
    <>
      <Col md={4} className="mb-5 text-center service-detail">
        <Fade bottom duration={2500} distance="40px">
          <Card className="border-0 py-4" style={{ maxWidth: '25rem' }}>
            <Card.Img
              variant="top"
              height="300"
              src={img}
              // style={{ objectFit: 'contain' }}
            />
            <Card.Body className="pt-0">
              <Card.Title as="h4" className="my-4">
                {name}
              </Card.Title>
              <Card.Text className="text-muted">{description}</Card.Text>
              <div>
                <h2 className="mb-4"> Price: ${price}</h2>
                <Link to={`/booking/${_id}`}>
                  <button className="btn btn-success"> Buy now</button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Fade>
      </Col>
    </>
  );
};

export default ServiceContent;
