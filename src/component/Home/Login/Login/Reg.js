import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import Swal from 'sweetalert2';

const Reg = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return;
    } else {
      registerUser(loginData.email, loginData.password);
    }

    e.preventDefault();
  };
  return (
    <Container>
      <h1 className="text-success w-50 mt-4 m-auto text-capitalize">
        Create your Account
      </h1>
      <Row>
        <Col xs={12} md={6} sm={12}>
          {!isLoading && (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleOnChange}
                  placeholder="Enter Name"
                />
                <Form.Text className="text-muted">
                  Enter your full name hare
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Re Enter password</Form.Label>
                <Form.Control
                  type="password"
                  name="password2"
                  placeholder="Password"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button onClick={handleLoginSubmit} variant="danger">
                {' '}
                Submit
              </Button>

              <p className="text-primary mb-5 ">
                Already have an account? <Link to="/login">Login Now</Link>
              </p>
            </Form>
          )}

          {isLoading && <Spinner animation="border" variant="warning" />}
          {/* {user?.email &&
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User Created successfully!',
              showConfirmButton: false,
              timer: 1500,
            })}
          {authError &&
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: { authError },
              footer: '<a href="">Why do I have this issue?</a>',
            })} */}
        </Col>
        <Col xs={12} md={6} sm={12}>
          {' '}
          <img
            src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Reg;
