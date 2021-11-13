// import Button from '@restart/ui/esm/Button';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

import './Navber.css';

const Navber = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="light" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          {' '}
          <h3>
            <span className="logo-1"> Auto </span>{' '}
            <span className="logo-2">Xpress</span>{' '}
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end " id="nav-ui">
          <Nav.Link as={HashLink} to="/home#home" className="nav-color">
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#services" className="nav-color">
            Services
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#rivew" className="nav-color">
            Reviews
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#About" className="nav-color">
            About
          </Nav.Link>
          <Nav.Link as={HashLink} to="/home#contact" className="nav-color">
            Contact Us
          </Nav.Link>
          <Nav.Link as={HashLink} to="/dashboard" className="nav-color">
            Dashboard
          </Nav.Link>

          {user?.displayName ? (
            <Button onClick={logout} className="log-out">
              Logout <i class="fas fa-sign-out-alt"></i>
            </Button>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          <Navbar.Text>
            {/* Signed in as: {user ? user.displayName : ''} */}
          </Navbar.Text>
          <Nav.Link as={Link} to="/cart">
            <i id="icon" className="fas fa-cart-plus "></i>{' '}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
