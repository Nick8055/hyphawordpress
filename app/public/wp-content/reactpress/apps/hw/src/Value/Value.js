import React, { useState, useEffect } from "react";
import "./Value.css";
import clock from "../assets/img/clock.svg";
import saveTime from "../assets/img/saveTime.svg";
import Enhance from "../assets/img/enhance.png";
import Optimize from "../assets/img/optimize.png"
import Simplify from "../assets/img/simplify.png"
import Master from "../assets/img/master.png"
import lowerCost from "../assets/img/lowerCost.svg";
import Button from "../Buttons/Button";
import WhatsappButton from "../Whatsapp Button/WhatsappButton";
import LineDiv from "../assets/img/Values/Line 8.png";

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
      <div className="heading">
        Create delightful patient experience <br /> <div className="heading heading2ndLine">with our easy-to-use tools.</div>
      </div>

      <div className="value-profiles-container">
        <div className="value-profiles-wrapper">
          <div className="value-subject">
            {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical1"></div>
            </div> */}
            <div className="value-subject-text">
              <h3 className="heading2 mb-s ">Enhance patient experience</h3>
              <div className="value-subject-sub mb-l">
                 Build strong patient relations and stay always connected with your patients.
                 <img className="LineDiv" src={LineDiv}></img>
                 <div><br></br></div>
                <div className="value-feature">
                  <img className="value-icon" src={enhanceIcon1}></img>
                  <div>Convenient online scheduling</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={enhanceIcon2}></img>
                  <div>Appointment notification and Follow-up reminders</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={enhanceIcon3}></img>
                  <div>Share digital prescriptions with a single click on WhatsApp</div>
                </div>
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
                <h3 className="heading2 mb-s ">Simplify your care Delivery</h3>
                <div className="value-subject-sub mb-l">
                One workplace to optimally manage your entire medical practice, no matter how many clinics you’re part of.
                <img className="LineDiv" src={LineDiv}></img>
                <div><br></br></div>
                <div className="value-feature">
                  <img className="value-icon" src={simplifyIcon1}></img>
                  <div>Record your patient data in lightning speed with ease</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={simplifyIcon2}></img>
                  <div>Access all records without chaos</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={simplifyIcon3}></img>
                  <div>Manage your practice easily on any device, anytime</div>
                </div>
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
                <h3 className="heading2 mb-s ">Simplify your care Delivery</h3>
                <div className="value-subject-sub mb-l">
                One workplace to optimally manage your entire medical practice, no matter how many clinics you’re part of.
                <img className="LineDiv" src={LineDiv}></img>
                <div><br></br></div>
                <div className="value-feature">
                  <img className="value-icon" src={simplifyIcon1}></img>
                  <div>Record your patient data in lightning speed with ease</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={simplifyIcon2}></img>
                  <div>Access all records without chaos</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={simplifyIcon3}></img>
                  <div>Manage your practice easily on any device, anytime</div>
                </div>
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
              <h3 className="heading2 mb-s ">Master your Cashflows</h3>
              <div className="value-subject-sub mb-l">
              Reduce expenses by simplifying the way you run your cinic.
              <img className="LineDiv" src={LineDiv}></img>
              <div><br></br></div>
              <div className="value-feature">
                  <img className="value-icon" src={masterIcon1}></img>
                  <div>Automate your bill desk</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={masterIcon2}></img>
                  <div>Track appointments and dues</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={masterIcon3}></img>
                  <div>Manage your doctor’s payrolls</div>
                </div>
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

        {isMobile ? (
          <div className="value-profiles-wrapper">
            <div className="value-subject">
              {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical2"></div>
            </div> */}

              <div className="value-subject-text">
                <h3 className="heading2 mb-s ">Optimize Growth Strategies</h3>
                <div className="value-subject-sub mb-l">
                Improve your web presence and optimize for a digital world.
                <img className="LineDiv" src={LineDiv}></img>
                <div><br></br></div>
                <div className="value-feature">
                  <img className="value-icon" src={optimizeIcon1}></img>
                  <div>Personalized website for patient engagement</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={optimizeIcon2}></img>
                  <div>Google business and Social media management</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={optimizeIcon3}></img>
                  <div>Actionable insight for patient retention </div>
                </div>
                </div>
                {/* <div className="value-button-container">
                  <Button type={"button-white"} value={"Schedule Demo"} />
                </div> */}
              </div>
            </div>
            <div className="value-img value-img2">
              <img src={Optimize} className="img2" />
            </div>
          </div>
        ) : (
          <div className="value-profiles-wrapper">
            <div className="value-img value-img2">
              <img src={Optimize} className="img2" />
            </div>
            <div className="value-subject">
              {/* <div className="value-line-white-vertical-wrapper">
              <div className="value-line-white-vertical2"></div>
            </div> */}

              <div className="value-subject-text">
                <h3 className="heading2 mb-s ">Optimize Growth Strategies</h3>
                <div className="value-subject-sub mb-l">
                Improve your web presence and optimize for a digital world.
                <img className="LineDiv" src={LineDiv}></img>
                <div><br></br></div>
                <div className="value-feature">
                  <img className="value-icon" src={optimizeIcon1}></img>
                  <div>Personalized website for patient engagement</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={optimizeIcon2}></img>
                  <div>Google business and Social media management</div>
                </div>
                <div className="value-feature">
                  <img className="value-icon" src={optimizeIcon3}></img>
                  <div>Actionable insight for patient retention </div>
                </div>
                </div>
                {/* <div className="value-button-container">
                  <WhatsappButton
                    type={"button-white"}
                    value={"Schedule Demo"}
                  />
                </div> */}
              </div>
            </div>
          </div>
        )}

      </div>

      
    </div>
  );
};

export default Value;
