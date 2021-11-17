import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';

import './des.css';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Pyment from '../../component/Dashboard/Pyment';
import Addnewcar from '../../component/Dashboard/Addnewcar/Addnewcar';
import Makeadmin from '../../component/Dashboard/MakeAdmin/Makeadmin';
import Adminroute from '../../component/Home/Login/Adminroute';
const Deshboard = () => {
  const { user, logout } = useAuth();
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand className="nav-color" href="#">
          <span className="logo-1"> Auto </span>{' '}
          <span className="logo-2">Xpress Desboard</span>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Desboard
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <Link to="/home#home">Home</Link>
              <Link to={`${url}/payment`}> payment</Link>
              {admin && (
                <div>
                  {' '}
                  <Link to={`${url}/addcar`}>Add Product</Link> <br />
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>{' '}
                </div>
              )}
            </Nav>
            {user?.displayName || user?.email ? (
              <Button onClick={logout} className="log-out nav-color  ">
                Logout <i class="fas fa-sign-out-alt"></i>
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <Switch>
        <Adminroute path={`${path}/makeAdmin`}>
          <Makeadmin />
        </Adminroute>
        <Route path={`${path}/payment`}>
          <Pyment> </Pyment>
        </Route>
        <Adminroute path={`${path}/addcar`}>
          <Addnewcar></Addnewcar>
        </Adminroute>
      </Switch>
      <Switch></Switch>
    </Navbar>
  );
};

export default Deshboard;
