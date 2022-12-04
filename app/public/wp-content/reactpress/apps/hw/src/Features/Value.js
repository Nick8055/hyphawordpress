import React, { useState, useEffect } from "react";
import "./Value.css";
import clock from "../assets/img/clock.svg";
import saveTime from "../assets/img/saveTime.svg";
import Enhance from "../assets/img/feature1 pic.png";
// import Optimize from "../assets/img/feature2 pic.png"
import Simplify from "../assets/img/feature2 pic.png"
import Master from "../assets/img/feature3 pic.png"
import lowerCost from "../assets/img/lowerCost.svg";
import Button from "../Buttons/Button";
import WhatsappButton from "../Whatsapp Button/WhatsappButton";

import enhanceIcon1 from "../assets/img/Values/enhance1 icon.png";
import enhanceIcon2 from "../assets/img/Values/enhance2 icon.png";
import enhanceIcon3 from "../assets/img/Values/enhance3 icon.png";

import simplifyIcon1 from "../assets/img/Values/simplify1 icon.png";
import simplifyIcon2 from "../assets/img/Values/simplify2 icon.png";
import simplifyIcon3 from "../assets/img/Values/simplify3 icon.png";

import masterIcon1 from "../assets/img/Values/master1 icon.png";
import masterIcon2 from "../assets/img/Values/master2 icon.png";
import masterIcon3 from "../assets/img/Values/master3 icon.png";

import optimizeIcon1 from "../assets/img/Values/optimize1 icon.png";
import optimizeIcon2 from "../assets/img/Values/optimize2 icon.png";
import optimizeIcon3 from "../assets/img/Values/optimize3 icon.png";


import yellowicon from "../YellowBox/Whatsapp Icon.png";

const Value = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  // const [tab, setTab] = useState(1);
  return (
    <div className="value container-padding">
      <div className="heading headingFeatureProduct">
      Running a clinic isn't easy<br />Hypha makes it simple and fun
      </div>

      <div className="value-profiles-container">
        <div className="value-profiles-wrapper">
          <div className="value-subject">
            {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical1"></div>
            </div> */}
            <div className="value-subject-text">
              <h3 className="heading2 mb-s ">Strengthen patient Relations</h3>
              <div className="value-subject-sub mb-l">
              Grow faster by putting your patients at the center of your business.<br></br>Build strong patient relations from day 1 with our patient management tool. 
              </div>

              {/* <div className="value-button-container">
                <WhatsappButton
                  type={"button-white"}
                  value={"Schedule Demo"}
                />
              </div> */}
            </div>
          </div>
          <div className="value-img">
            <img src={Enhance} className="img1" />
          </div>
        </div>

        {isMobile ? (
          <div className="value-profiles-wrapper">
            <div className="value-subject">
              {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical2"></div>
            </div> */}

              <div className="value-subject-text">
                <h3 className="heading2 mb-s ">All-in-One Platform</h3>
                <div className="value-subject-sub mb-l">
                Visiting/Owning of multiple clinics?<br></br>We got you covered.<br></br>Access all your work on any device, anytime, anywhere.
                </div>
                {/* <div className="value-button-container">
                  <Button type={"button-white"} value={"Schedule Demo"} />
                </div> */}
              </div>
            </div>
            <div className="value-img value-img2">
              <img src={Simplify} className="img2" />
            </div>
          </div>
        ) : (
          <div className="value-profiles-wrapper">
            <div className="value-img value-img2">
              <img src={Simplify} className="img2" />
            </div>
            <div className="value-subject">
              {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical2"></div>
            </div> */}

              <div className="value-subject-text">
                <h3 className="heading2 mb-s ">All-in-One Platform</h3>
                <div className="value-subject-sub mb-l">
                Visiting/Owning of multiple clinics?<br></br>We got you covered.<br></br>Access all your work on any device, anytime, anywhere.

                </div>
                <div className="value-button-container">
                  {/* <WhatsappButton
                    type={"button-white"}
                    value={"Schedule Demo"}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="value-profiles-wrapper">
          <div className="value-subject">
            {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical1"></div>
            </div> */}
            <div className="value-subject-text">
              <h3 className="heading2 mb-s ">State-Of-The-Art Design</h3>
              <div className="value-subject-sub mb-l">
              Customized uniquely for each practice, hypha offers convenience at every step from record taking to finance management.<br></br>Now, you can complete a patient documentation within just 1 minute. 
              </div>
              {/* <div className="value-button-container">
                <WhatsappButton
                  type={"button-white"}
                  value={"Schedule Demo"}
                />
              </div> */}
            </div>
          </div>
          <div className="value-img">
            <img src={Master} className="img3" />
          </div>
        </div>

      

      </div>

      
    </div>
  );
};

export default Value;
