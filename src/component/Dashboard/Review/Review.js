import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Review = () => {
  return (
    <section>
      <div
        className="testimonials mx-auto"
        style={{ borderRadius: '15px', maxWidth: '60rem' }}
      >
        <div className="review-title pt-2 text-center">
          <h2>My Testimonials</h2>
        </div>
        <Card className="my-4 mx-auto" style={{ maxWidth: '30rem' }}>
          <Card.Img variant="top" src="" width="60" />
          <Card.Body className="text-center">
            <h5>
              <br />
              <span></span>
            </h5>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <div className="text-center">
          <Button variant="outline-success" className="py-1 px-2">
            <FontAwesomeIcon icon={faEdit} className="mx-1" /> Edit
          </Button>
          <Button variant="outline-danger" className="py-1 px-2 ml-4">
            <FontAwesomeIcon icon={faTrash} className="mx-1" /> Delete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Review;
