import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <img
            src="/portfolio.png"
            alt=""
            className="img-fluid portfolio_banner"
          />
        </div>
        <Container>
          <Row>
          <Col lg={4}>
              <Link href="https://adamsvibe.com/" target="_blank">
                <div className="App mt-5 ps-2">
                  <div className="scroll-div">
                    <img
                      width="300px"
                      height="auto"
                      src="/projects/digital.png"
                      style={{ top: "0px" }}
                    />
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4}>
              <Link href="https://insignia-resorts.com/" target="_blank">
                <div className="App mt-5 ps-2">
                  <div className="scroll-div">
                    <img
                      width="300px"
                      height="auto"
                      src="/projects/insignia.png"
                      style={{ top: "0px" }}
                    />
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4}>
              <Link href="https://ifadeshop.com/" target="_blank">
                <div className="App mt-5 ps-2">
                  <div className="scroll-div">
                    <img
                      width="300px"
                      height="auto"
                      src="/projects/ifad.png"
                      style={{ top: "0px" }}
                    />
                  </div>
                </div>
              </Link>
            </Col>
            
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
