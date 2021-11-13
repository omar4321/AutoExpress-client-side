import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Footer.css';

const Fotter = () => {
  return (
    <footer>
      <div className=" footer">
        <div className="">
          <div className="row">
            <Fade left duration={2000} distance="40px">
              {' '}
              <div className="col-md-4  ">
                <div className="first-cart ">
                  <h3>
                    <span className="logo-1"> Auto </span>{' '}
                    <span className="logo-2">Xpress</span>{' '}
                  </h3>{' '}
                  <h1>Contact Us</h1>
                  <small className="mt-5">
                    Office: 12 Fake Street,New York
                  </small>
                  <br />
                  <small className="mt-3">Phone: (08) 8827 633354</small>
                  <br />
                  <small className="mt-3">Fax: 08) 08 4752 1499</small>
                  <br />
                  <small className="mt-3">Mail: support.goaltheme.com</small>
                  <br />
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade right duration={2000} distance="40px">
              <div className="col-md-4">
                <div className="second-part">
                  <h3>
                    <span className="logo-1"> Auto </span>{' '}
                    <span className="logo-2">Xpress</span>{' '}
                  </h3>
                  <Form>
                    <FormGroup>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Your name / company’s name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter you name or company's name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Your Message</Form.Label>
                      <textarea
                        className="form-control"
                        placeholder="Enter your message"
                        rows="3"
                      ></textarea>
                    </FormGroup>
                    <Button type="submit" className="btn btn-danger ">
                      Send
                    </Button>
                  </Form>
                  <br />
                  <p>
                    <span className="m-2 ">
                      <i class="fab fa-facebook"></i>
                    </span>
                    <span className="m-2 ">
                      <i class="fab fa-linkedin"></i>
                    </span>
                    <span className="m-2 ">
                      <i class="fab fa-instagram"></i>
                    </span>
                    <span className="m-2 ">
                      <i class="far fa-envelope"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
                  alt=""
                />
              </div>
            </Fade>
          </div>
          <hr />
          <div className="botton text-center">
            <small>© 2020 Omar Theme by Goalthemes. All Rights Reserved.</small>
          </div>
        </div>
      </div>
      <a href="#home" className="text-white">
        <div className="scrollToTop">
          <i className="fas fa-arrow-up"></i>
        </div>
      </a>
    </footer>
  );
};

export default Fotter;
