import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import React from "react";
import Slider from "react-slick";
import SliderImg1 from "../assets/img/sliderImg1.png";
import SliderImg2 from "../assets/img/sliderImg2.png";
import SliderImg3 from "../assets/img/sliderImg3.png";
// import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import "./ScreenShotSlider.css";
export default function ScreenShotSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="screenshot-slider-arrow screenshot-slider-nextArrow"
        onClick={onClick}
      >
        <FiChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="screenshot-slider-arrow screenshot-slider-prevArrow"
        onClick={onClick}
      >
        {/* {'<'} */}
        <FiChevronLeft />
      </div>
    );
  };

  const Feature = ({ Heading, Desc, subDesc, Image }) => {
    return (
      <div className="screenshot-slider-container">
        <img className="screenshot-slider-img" src={Image} />
        <div className="screenshot-slider-text-wrapper">
          <div className="screenshot-slider-heading">{Heading}</div>
          <div className="orange-line"></div>
          <div className="screenshot-slider-subtitle">
            {Desc && (
              <b>
                {Desc}

                <br />
                <br />
              </b>
            )}
            {subDesc}
          </div>
        </div>
      </div>
    );
  };

  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 9000,
    cssEase: "linear",

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="screenshot-slider container-padding">
      <h1 className="heading  mb-l">Designed to delight</h1>
      <div className="subtitle">
        Intuitive design is how we give our Clinicians new superpowers
      </div>

      <Slider className="screenshot-slider-element" {...settings}>
        <Feature
          Heading={
            "Build strong patient relationships and always stay connected with our smart patient profiles."
          }
          Desc={
            null
            // "Share prescriptions and medical records with your patients over whatsapp."
          }
          subDesc={
            "Our automated Whatsapp/SMS appointment reminders can help reduce your costly no-shows."
          }
          Image={SliderImg1}
        />

        <Feature
          Heading={"One workspace to manage your entire medical practice"}
          Desc={"No matter how many different clinics you visit."}
          subDesc={
            "Get notified about patient appointments and track your income with our monthly reports."
          }
          Image={SliderImg2}
        />

        <Feature
          Heading={
            "“If you can’t measure it, you can’t improve it” - Peter Drucker"
          }
          Desc={null}
          subDesc={
            "Our intelligent dashboard analytics help you turn insights into actions"
          }
          Image={SliderImg3}
        />
      </Slider>
    </div>
  );
}
