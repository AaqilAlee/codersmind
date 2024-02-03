"use client";
import Link from "next/link";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { TypeAnimation } from "react-type-animation";

export default function HeroNew() {
  return (
    <>
      <section className="hero_banner">
        <Carousel fade>
          <Carousel.Item>
            <div className=" position-relative slider_overlay">
              <img
                src="/slider/04.jpg"
                alt=""
                className="img-fluid hero_banner_img "
              />
            </div>

            <Carousel.Caption className="slider_details d-flex justify-content-center align-items-center pt-5">
              <div className="">
                <p className="text-white m-0 fw_400 slideInUp">welcome to</p>
                <TypeAnimation
                  sequence={["CodersMind23", 1000, "", ,]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "50PX",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    display: "inline-block",
                  }}
                />
                {/* <h1 className='display-3 fw-bold'>CodersMind23</h1> */}
                <div className="test_des_animation">
                  <p className="text-light pb-4 px-5">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet.
                  </p>
                </div>

                <div className="d-flex justify-content-center mt-3 btn_animation">
                  <Link href="#" className="button-48 me-2" role="button">
                    <span className="text text-uppercase">about us</span>
                  </Link>
                  <Link href="#" className="button-48 ms-2" role="button">
                    <span className="text text-uppercase">portfolio</span>
                  </Link>
                </div>
              </div>
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="positiov-relative mouse_animation text-danger">
          <img src="/mouse_icon.png" className="mouse_btn_size" alt=""/>
        </div>
      </section>
    </>
  );
}
