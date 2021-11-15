import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import DashboardSlider from '../../../component/Dashboard/DashboardSlider/DashboardSlider';
import './admin.css';
import DashboardStatus from '../DashbordPageStatus/DashboardStatus';
const Admin = () => {
  document.body.style.backgroundColor = '#e5e5e5';
  const user = useAuth();
  const { userInfo, setUserInfo } = user;

  const [email, setEmail] = useState({
    email: '',
  });
  const emailData = (e) => {
    if (e.target.name === 'Email') {
      setEmail({ ...email, email: e.target.value });
      userInfo.successMessage = '';
      userInfo.errorMessage = '';
    }
  };

  const emailSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/addAdmin', email)
      .then(() => {
        setUserInfo({ ...userInfo, successMessage: 'Make admin Successfully' });
      })
      .catch(() => {
        setUserInfo({
          ...userInfo,
          errorMessage: 'Can not make admin. Please Try again later',
        });
      });
  };
  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-8 col-sm-7 col-lg-9 p-0">
            <DashboardStatus pageName={{ name: 'Make Admin' }} />
            <Form
              onSubmit={emailSubmit}
              className="makeAdminForm"
              style={{ height: '67vh' }}
            >
              <FormGroup className="px-5 my-5">
                <p
                  style={
                    userInfo.successMessage
                      ? { animation: 'FadeAnimation 1s ease-in 2s forwards' }
                      : null
                  }
                  className="success"
                >
                  {userInfo.successMessage}
                </p>
                <p
                  style={
                    userInfo.errorMessage
                      ? { animation: 'FadeAnimation 1s ease-in 2s forwards' }
                      : null
                  }
                  className="error"
                >
                  {userInfo.errorMessage}
                </p>
                <Form.Label>Email</Form.Label>
                <div className="d-flex emailContainer justify-content-center align-items-center">
                  <Form.Control
                    onChange={emailData}
                    required
                    type="email"
                    className=" email"
                    name="Email"
                    placeholder="Enter email"
                  />
                  <Button type="submit" className="mx-3 adminBtn commonBtn">
                    Make Admin
                  </Button>
                </div>
              </FormGroup>
            </Form>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Admin;
