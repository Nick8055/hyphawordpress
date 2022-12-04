import React from "react";
import "./Features.css";
import img1 from "../assets/img/image 1.svg";
import img2 from "../assets/img/sliderImg2.png";
import img3 from "../assets/img/image 3.svg";

const Features = () => {
  return (
    <div className="features container-padding">
      <div className="heading">Features designed to make your life easier</div>
      <div className="features-profiles-container">
        <div className="features-profiles-wrapper">
          <div className="features-subject">
            <div className="features-line-white-vertical-wrapper">
              <div className="features-line-white-vertical"></div>
            </div>
            <div className="features-subject-text1">
              Build strong patient relationships and always stay connected.
              Share prescriptions and medical records with your patients over
              whatsapp.
            </div>
          </div>
          <div className="features-img">
            <img src={img1} className="img1" />
          </div>
        </div>
        <div className="features-profiles-wrapper">
          <div className="features-img features-img2">
            <img src={img2} className="img2" />
          </div>

          <div className="features-subject">
            <div className="features-line-white-vertical-wrapper">
              <div className="features-line-white-vertical"></div>
            </div>
            <div className="features-subject-text1">
              One workspace to manage your entire medical practice. No matter
              how many different clinics you visit. Get notified about patient
              appointments and track your income with our monthly reports.
            </div>
          </div>
        </div>
        <div className="features-profiles-wrapper">
          <div className="features-subject">
            <div className="features-line-white-vertical-wrapper">
              <div className="features-line-white-vertical"></div>
            </div>
            <div className="features-subject-text1">
              <b>
                “If you can’t measure it, you can’t improve it” - Peter Drucker
              </b>
              <br />
              Our intelligent dashboard analytics help you turn insights into
              actions.
            </div>
          </div>
          <div className="features-img">
            <img src={img3} className="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
