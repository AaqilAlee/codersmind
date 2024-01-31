import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Strategy = () => {
  return (
    <>
      <section className="strategy">
        <Container>
          <Row>
          <Col lg={12}>
            <div className="d-flex justify-content-center strategy_vertical_line">
              <img
                src="/vertical_line.png"
                className=" "
                alt="vertical line image"
              />
            </div>
          </Col>
            <Col lg={4}>
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div className="strategy_one position-relative">
                <div className="d-flex align-items-center">
                  <h2 className="step_title">01</h2>
                  <p className="strategy_title font_poppins text-capitalize">Strategy</p>
                </div>
              </div>
              {/* </div> */}
            </Col>
            <Col lg={4}>
              <div className="p-5 position-relative">
                <img
                  src="./strategy/step_img_1.jpg"
                  alt=""
                  className="img-fluid rounded-pill strategy_img "
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className="strategy_one">
                <p className="strategy_description font_16 font_poppins pe-0">
                  We define your competition and target audience. Discover what
                  is working in your online industry, then design your website
                  accordingly.
                </p>
              </div>
            </Col>


            <Col lg={4}>
              <div className="strategy_one">
                <p className="strategy_description font_16 font_poppins pe-0 text-end">
                  We define your competition and target audience. Discover what
                  is working in your online industry, then design your website
                  accordingly.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="p-5">
                <img
                  src="./strategy/step_img_2.jpg"
                  alt=""
                  className="img-fluid rounded-pill strategy_img"
                />
              </div>
            </Col>
            <Col lg={4}>
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div className="strategy_one position-relative">
                <div className="d-flex align-items-center">
                  <p className="design_title font_poppins text-capitalize">design</p>
                  <h2 className="step_title">02</h2>
                </div>
              </div>
              {/* </div> */}
            </Col>


            <Col lg={4}>
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div className="strategy_one position-relative">
                <div className="d-flex align-items-center">
                  <h2 className="step_title">03</h2>
                  <p className="strategy_title font_poppins text-capitalize">Strategy</p>
                </div>
              </div>
              {/* </div> */}
            </Col>
            <Col lg={4}>
              <div className="p-5">
                <img
                  src="./strategy/step_img_3.jpg"
                  alt=""
                  className="img-fluid rounded-pill strategy_img"
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className="strategy_one">
                <p className="strategy_description font_16 font_poppins pe-0">
                  We define your competition and target audience. Discover what
                  is working in your online industry, then design your website
                  accordingly.
                </p>
              </div>
            </Col>

             
            <Col lg={4}>
              <div className="strategy_one">
                <p className="strategy_description font_16 font_poppins pe-0 text-end">
                  We define your competition and target audience. Discover what
                  is working in your online industry, then design your website
                  accordingly.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="p-5">
                <img
                  src="./strategy/step_img_5.jpg"
                  alt=""
                  className="img-fluid rounded-pill strategy_img"
                />
              </div>
            </Col>
            <Col lg={4}>
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div className="strategy_one position-relative">
                <div className="d-flex align-items-center">
                  <p className="design_title font_poppins text-capitalize">design</p>
                  <h2 className="step_title">04</h2>
                </div>
              </div>
              {/* </div> */}
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Strategy;
