"use client";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ClientReviews = () => {
  return (
    <>
      <section className="client_review">
        <div className="d-flex justify-content-center pb-5">
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
                  src="/review1.jpg"
                  alt="client image"
                  className="client_img"
                />
              </div>
              <h3 className="text-center text-light font_poppins text-capitalize pt-4">
                mr. jhon
              </h3>
              <p className="text-center text-light w-50 font_14 c_review font_poppins fw-light c_review_color fst-italic">
                I needed more leads for my services. Pay-per-click, banners of
                maybe even broschures. They made an analysis of my existing
                site. It occurred that my webdite is banned with Google, and I
                never knew about that!
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/review1.jpg"
                  alt="client image"
                  className="client_img"
                />
              </div>
              <h3 className="text-center text-light font_poppins text-capitalize pt-4">
                mr. jhon
              </h3>
              <p className="text-center text-light w-50 font_14 c_review font_poppins fw-light c_review_color fst-italic">
                I needed more leads for my services. Pay-per-click, banners of
                maybe even broschures. They made an analysis of my existing
                site. It occurred that my webdite is banned with Google, and I
                never knew about that!
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/review1.jpg"
                  alt="client image"
                  className="client_img"
                />
              </div>
              <h3 className="text-center text-light font_poppins text-capitalize pt-4">
                mr. jhon
              </h3>
              <p className="text-center text-light w-50 font_14 c_review font_poppins fw-light c_review_color fst-italic">
                I needed more leads for my services. Pay-per-click, banners of
                maybe even broschures. They made an analysis of my existing
                site. It occurred that my webdite is banned with Google, and I
                never knew about that!
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
