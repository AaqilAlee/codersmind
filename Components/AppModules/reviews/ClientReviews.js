"use client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ClientReviews = () => {
  return (
    <>
      <section className="client_review">
        <div className="d-flex justify-content-center pt-2 pb-5">
          <img
            src="/vertical_line1.png"
            className=""
            alt="vertical line image"
          />
        </div>
        <Container>
          <Carousel>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/logo3.png"
                  alt="client image"
                  className="client_img"
                />
              </div>
              <h3 className="text-center text-light font_poppins text-capitalize pt-4">
                MB international
              </h3>
              <p className="text-center text-light w-50 font_14 c_review font_poppins fw-light c_review_color fst-italic">
                Working with CoderMind23 was an absolute pleasure. The team was
                professional, communicative, and delivered top-notch quality
                work within the agreed timeline. I'm thrilled with the end
                result and would highly recommend their services to anyone
                looking for exceptional solutions. 10/10 would work with them
                again!
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/logo2.png"
                  alt="client image"
                  className="client_img"
                />
              </div>
              <h3 className="text-center text-light font_poppins text-capitalize pt-4">
                digital wheel
              </h3>
              <p className="text-center text-light w-50 font_14 c_review font_poppins fw-light c_review_color fst-italic">
                Working with CoderMind23 was an absolute pleasure. The team was
                professional, communicative, and delivered top-notch quality
                work within the agreed timeline. I'm thrilled with the end
                result and would highly recommend their services to anyone
                looking for exceptional solutions. 10/10 would work with them
                again!
              </p>
            </Carousel.Item>
           
          </Carousel>
        </Container>
        <div className="d-flex justify-content-center py-5">
          <img
            src="/vertical_line1.png"
            className=""
            alt="vertical line image"
          />
        </div>
      </section>
    </>
  );
};

export default ClientReviews;
