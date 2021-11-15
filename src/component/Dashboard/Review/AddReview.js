import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form } from 'react-bootstrap';

const AddReview = () => {
  return (
    <section>
      <Form className="w-100 form-main">
        <div
          className="p-5 mx-auto mt-5 bg-white"
          style={{ borderRadius: '15px', maxWidth: '50rem' }}
        >
          <Form.Row className="justify-content-center px-4">
            <Form.Group as={Col} md={12}>
              <Form.Label style={{ fontWeight: 'bold' }}>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group as={Col} md={12}>
              <Form.Label style={{ fontWeight: 'bold' }}>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group as={Col} md={12}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                Description
              </Form.Label>
              <Form.Control
                style={{ height: '10rem' }}
                type="text"
                placeholder="Description"
              />
            </Form.Group>
          </Form.Row>
          <div className="text-center mt-4">
            <Button
              type="submit"
              className="btn-main"
              style={{ padding: '.6rem 2rem' }}
            ></Button>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default AddReview;
