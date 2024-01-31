"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceData from "../../../data/ServiceData";
import Link from "next/link";

const Services = () => {
  const [Data, setData] = useState(ServiceData);

  return (
    <>
      <section className="pt-5">
        <Container>
          <Row>
            {Data.map((CurData, index) => {
              return (
                <Col lg={4} key={index}>
                  <div className=" d-flex justify-content-center align-items-center p-4 mb-4 service_main_div">
                    <div className="text-center">
                        <div className="p-3 service_icon mb-3">
                            <img src={CurData.image} alt="" className="img-fluid service_img"/>
                        </div>
                      <Link href="#" className="font_poppins service_title font_24 text-dark text-decoration-none">{CurData.title}</Link>
                      <p className="font_poppins font_16 " style={{color: "#7f7f7f"}}>{CurData.description}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
            <Col lg={12}>
            <div className="d-flex justify-content-center pt-3">
              <img
                src="/vertical_line.png"
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

export default Services;
