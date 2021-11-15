import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  console.log(loginData);
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <h1 className="text-success w-50 mt-4 m-auto text-capitalize">
        Login your Account
      </h1>
      <Row>
        <Col xs={12} md={6} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                placeholder="Enter email"
                required
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
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={handleLoginSubmit} variant="danger">
              {' '}
              Login
            </Button>
            <p className="mt-4  text-primary">
              new to AutoExpress? <Link to="/reg">Create Account</Link>
            </p>
            <div>----------OR-------</div>
            <br />

            <Button onClick={handleGoogleSignIn} variant="success  mb-5">
              <span className="text-info">
                {' '}
                <i class="fab fa-google"></i>
              </span>{' '}
              Google sign In
            </Button>
            {isLoading && <Spinner animation="border" variant="warning" />}
          </Form>
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

export default Login;
