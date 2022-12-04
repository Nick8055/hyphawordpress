import React, { useState, useEffect } from "react";

import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="design-slider container-padding">
      <div className="heading">Designed to delight</div>
      <div className="subtitle">
        Intuitive design is how we give our Clinicons new superpowers
      </div>
      <div className="slider-wrapper">
        <div className="container-slider">
          {!isMobile && <BtnSlider moveSlide={nextSlide} direction={"next"} />}
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img src={obj.image} className="slider-img" />
                <div className="side-text-container">
                  <div className="slider-heading">{obj.title}</div>
                  <div className="orange-line"></div>
                  <div className="slider-subtitle">
                    {obj.subTitle && (
                      <b>
                        {obj.subTitle}

                        <br />
                        <br />
                      </b>
                    )}
                    {obj.subSubTitle}
                  </div>
                </div>
              </div>
            );
          })}

          {!isMobile && <BtnSlider moveSlide={prevSlide} direction={"prev"} />}
        </div>
        <div className="container-dots">
          {isMobile && <BtnSlider moveSlide={nextSlide} direction={"next"} />}
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1 ? "slider-dot active" : "slider-dot"
              }
            ></div>
          ))}
          {isMobile && <BtnSlider moveSlide={prevSlide} direction={"prev"} />}
        </div>
      </div>
    </div>
  );
}
