import React from "react";
import { Col, Container } from "react-bootstrap";
import Link from "next/link";

const StartProject = () => {
  return (
    <>
      <section>
        <Container className="">
        <div className="my-5 position-relative">
          <img src="/logo/CM231.png" alt="" className="mini_logo"/>
        </div>
          <Col lg={12}>
            <div className="d-flex justify-content-center">
              <img
                src="/vertical_line.png"
                className=""
                alt="vertical line image"
              />
            </div>
          </Col>
          <Col lg={8} className="com_des_title">
            <div className="my-3">
              <h2 className="font_poppins font_56 text-center px-4">
                Lets Get Started <br />
                Your Project
              </h2>
              <p className="text-center font_16 px-3 c_review_color">We’ll help to achieve your goals and to grow business</p>
            </div>
          </Col>
          <Col lg={12}>
            <div className="d-flex justify-content-center pt-3">
              <img
                src="/vertical_line.png"
                className=""
                alt="vertical line image"
              />
            </div>
          </Col>
          <div className="d-flex justify-content-center my-4">
            <Link href="#" className="button-49" role="button">
              <span className="font_poppins text-uppercase">get started</span>
            </Link>
          </div>
          <Col lg={12}>
            <div className="d-flex justify-content-center pt-3">
              <img
                src="/vertical_line.png"
                className=""
                alt="vertical line image"
              />
            </div>
          </Col>
         
        </Container>
      </section>
    </>
  );
};

export default StartProject;
