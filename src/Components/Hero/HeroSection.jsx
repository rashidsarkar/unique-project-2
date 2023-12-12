import React from "react";
import "./herocss.css";
import TextScramble from "../Shared/TextScramble/TextScramble";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section
      className="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/pvLsG8h/pexels-lukas-574077.jpg')",
      }}
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
            <h1 data-aos="zoom-in-up" className="display-5 fw-bold mb-3">
              {/* data-aos="fade-right" */}
              Elevate Your Web Presence
            </h1>
            {/* <TypeAnimation
              sequence={[
                "Experience Modern Luxury Living!",
                1000,
                "Explore Unmatched Comfort and Style!",
                1000,
                "Offers Modern Living Spaces!",
                1000,
                "Discover a New Perspective!",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "3rem", fontWeight: "700" }}
              repeat={Infinity}
            /> */}

            <p data-aos="zoom-in-down" className="lead mb-5 text-white ">
              {/* data-aos="fade-left" */}
              Transform your online presence and stand out from the rest with
              our cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
