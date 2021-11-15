// import Button from '@restart/ui/esm/Button';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

import './Navber.css';

const Navber = () => {
  const { user, logout, isadmin } = useAuth();
  // console.log(isadmin);
  // console.log(user);
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
          <Nav.Link as={HashLink} to="/myorder" className="nav-color">
            my order
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item to="/home#contact"> Payment</NavDropdown.Item>
            <NavDropdown.Item to="/myorder">My Order</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
            {/* {true ? (
              <>
                {' '}
                <NavDropdown.Item href="#"> Payment</NavDropdown.Item>
                <NavDropdown.Item to="/myorder">My Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item href="#"> Payment</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
              </>
            )} */}
          </NavDropdown>
          {user?.displayName || user?.email ? (
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
