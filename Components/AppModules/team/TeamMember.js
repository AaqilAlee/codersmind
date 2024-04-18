"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col } from "react-bootstrap";

const TeamMember = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrow: ture,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="team_membersec">
        <Container>
          <Col lg={12}>
            <div className="d-flex justify-content-center">
              <img
                src="/vertical_line.png"
                className=""
                alt="vertical line image"
              />
            </div>
          </Col>
          <div className="text-center my-2">
            <h1 className="text-capitalize">team Members</h1>
            <p className="text-capitalize c_review_color ">we build togather</p>
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
          <div className="my-5">
            <Slider {...settings}>
              <div className=" team_slider_div d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="/azad.png" alt="" className="team_members" />
                  </div>
                  <div className="pt-2">
                    <h2 className="text-capitalize m-0 font_30 text-center">
                      rubel azad
                    </h2>
                    <p className="font_14 text-center text-capitalize">
                      software developer(laravel)
                    </p>
                  </div>
                </div>
              </div>
              <div className=" team_slider_div d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="/mamun.jpg" alt="" className="team_members" />
                  </div>
                  <div className="pt-2">
                    <h2 className="text-capitalize m-0 font_30 text-center">
                      al mamun
                    </h2>
                    <p className="font_14 text-center text-capitalize">
                      software developer(react)
                    </p>
                  </div>
                </div>
              </div>
              <div className=" team_slider_div d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="/mihal.png" alt="" className="team_members" />
                  </div>
                  <div className="pt-2">
                    <h2 className="text-capitalize m-0 font_30 text-center">
                      mihal
                    </h2>
                    <p className="font_14 text-center text-capitalize">
                      software developer(laravel)
                    </p>
                  </div>
                </div>
              </div>
              <div className=" team_slider_div d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="/imam.png" alt="" className="team_members" />
                  </div>
                  <div className="pt-2">
                    <h2 className="text-capitalize m-0 font_30 text-center">
                      imam masum
                    </h2>
                    <p className="font_14 text-center text-capitalize">
                      software developer(.net)
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <Col lg={12}>
            <div className="d-flex justify-content-center pb-2">
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

export default TeamMember;
