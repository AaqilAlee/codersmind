import React from "react";
import { Col, Container } from "react-bootstrap";
import Link from "next/link";


const CompanyDescription = ({ title, descrip, link }) => {
  return (
    <>
      <section id="about">
        <Container className="pt-4">
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
              <h2 className="font_poppins font_30 text-center px-4">{title}</h2>
              <p className="text-center font_16 px-3">{descrip}</p>
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
            <Link as={Link} href={link} className="button-49" role="button">
              <span className="font_poppins text-uppercase">our portfolio</span>
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

export default CompanyDescription;
