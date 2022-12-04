import "./FeaturesSlider.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import React from "react";
import Slider from "react-slick";
import pic1 from "./Frame.png";
import pic2 from "./Frame-1.png";
import pic3 from "./Frame-2.png";
// import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

export default function FeaturesSlider() {
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

  const Feature = ({ Heading, Desc, Image }) => {
    return (
      <div className="FeatureContainer">
        <div className="FeatureHeadingAndDesc">
          <h1 className="FeatureHeading">{Heading}</h1>
          <h1 className="FeatureDesc">{Desc}</h1>
        </div>
        <img className="FeatureImage" src={Image} />
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
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="features-slider container-padding">
      <h1 className="heading mb-l">Lifestyle Page</h1>
      {/* <h1 className='Subtitle'>Stretch your time | Plan your Day | Join the Green Side</h1> */}

      <Slider className="features-slider-element" {...settings}>
        <Feature
          Heading={"Plan your day anywhere, anytime."}
          Desc={
            "Managing your clinic remotely has never been easier. Our cloud based system will give you the flexibility to manage your organization and take informed decisions on the move."
          }
          Image={pic1}
        />

        <Feature
          Heading={"Join The Green Side"}
          Desc={
            "Going green at the workplace is not just great for the planet, but for the business too. By going paper-free, you can save time, space & money while caring for our planet. Send reports such as prescriptions, clinical procedures and bills, directly from the Hypha app to the patients and eliminate the need for paper."
          }
          Image={pic2}
        />

        <Feature
          Heading={"Stretch your Time"}
          Desc={
            "Get more things done within your limited time, do more business every day. By automating your mundane and tedious tasks, Hypha brings convenience at your fingertips. Use your time to grow your business. Find more time for your loved ones."
          }
          Image={pic3}
        />
      </Slider>
    </div>
  );
}
