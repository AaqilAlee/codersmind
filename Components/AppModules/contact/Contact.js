import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiMobile1 } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <section className="contact_bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-center pt-1">
                <img
                  src="/vertical_line3.png"
                  className=""
                  alt="vertical line image"
                />
              </div>
            </Col>
            <Col lg={4} className="py-5">
              <div className="d-flex justify-content-center py-4">
                <div class="circle-wrapper">
                  <div class="success circle"></div>
                  <div class="icon">
                    <img src="icon1.png" alt="" className="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-capitalize font_30 fw-semibold ">call us</h3>
                <p className="m-0 fw-light c_review_color">New Accounts: 1-800-123-4567</p>
                <p className="fw-light c_review_color">Support: 1-800-123-4569 </p>
              </div>
            </Col>
            <Col lg={4} className="py-5">
              <div className="d-flex justify-content-center py-4">
                <div class="circle-wrapper">
                  <div class="success circle"></div>
                  <div class="icon">
                    <img src="icon3.png" alt="" className="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-capitalize font_30 fw-semibold">write email</h3>
                <p className="m-0 fw-light c_review_color">demo@gmail.com</p>
                <p className="fw-light c_review_color">demo2@gmail.com</p>
              </div>
            </Col>
            <Col lg={4} className="py-5">
              <div className="d-flex justify-content-center py-4">
                <div class="circle-wrapper">
                  <div class="success circle"></div>
                  <div class="icon">
                    <img src="icon2.png" alt="" className="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-capitalize font_30 fw-semibold">visit us</h3>
                <p className="m-0 fw-light c_review_color">address</p>
                
              </div>
            </Col>
            
            <Col lg={12}>
              <div className="d-flex justify-content-center pb-5">
                <img
                  src="/vertical_line3.png"
                  className=""
                  alt="vertical line image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
