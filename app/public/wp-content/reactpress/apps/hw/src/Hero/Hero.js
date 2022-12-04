import React from "react";
import WhatsappButton from "../Whatsapp Button/WhatsappButton";
import Button from "../Buttons/Button";
import heroImg from "../assets/img/hero2.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-heading">
        <div className="hero-main mb-l">
          Grow your clinic <br />
          through better
          <br /> patient engagement
        </div>
        <div className="hero-sub">
          <div className="hero-subtitle">
            Members club offering digital toolkits for clinic owners <br />
            to thrive in a new era of healthcare.
          </div>
          <div className="button-container">
            <WhatsappButton value={"Schedule demo"} type={"button-inverse"} />

            {/* <Button
              value={"Join the club "}
              type={"button-main"}
              link={"https://form.questionscout.com/60f0dc2e4823f415949a4ca4"}
            /> */}
            <a className="Hero-button-Join-Club" href="https://form.questionscout.com/636e64bc2b4b9a0679c26da3" target="_blank">
              <button className="button-main">
                <div>Join the Club</div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-img-div">
        {/* <img src={heroImg} alt="Hypha Universe" className="hero-image" /> */}
      </div>
    </div>
  );
};

export default Hero;
