import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="footer_dark_bg position-relative">
        <div className="mainitem text-center">
          <h2 className="footer_c_name">CodersMind23</h2>
          <div className="d-flex justify-content-center">
            <Link href="" className="footer_icons">
              <RiFacebookFill  />
            </Link>
            <Link href="" className="footer_icons">
              <FaTwitter  />
            </Link>
            <Link href="" className="footer_icons">
              <FaLinkedinIn />
            </Link>
            <Link href="" className="footer_icons">
              <FaYoutube />
            </Link>
            <Link href="" className="footer_icons">
              <FaGoogle />
            </Link>
          </div>
        </div>
        <img src="/logo/CM231.png" alt="footer logo" className="footer_logo" />
      </section>

      <section>
        <Col lg={12}>
          <div className="text-center py-4  app_bg">
            <Link
              href="#"
              className="text-center text-light m-0 text-decoration-none"
            >
              @Developed by CodersMind23
            </Link>
          </div>
        </Col>
      </section>
    </>
  );
};

export default Footer;
