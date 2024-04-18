import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <div className="scroll-div">
                  <img
                    width="300px"
                    height="auto"
                    src="http://dribbble.s3.amazonaws.com/users/197532/screenshots/1145931/freebie-1.png"
                    style={{ top: "0px" }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
