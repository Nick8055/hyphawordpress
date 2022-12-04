import React from "react";
import "./Grids.css";
import consultation from "../assets/img/row1-col1-img1.png";
import img2 from "../assets/img/row1-col1-img2.png";
import health from "../assets/img/row1-col2-img.png";
import qr from "../assets/img/qrcode.svg";
import whats from "../assets/img/whatsapp.svg";
import bar from "../assets/img/barcode_rect.svg";
import scope from "../assets/img/scope.png";

const Grids = () => {
  return (
    <div className="gridApp">
      <div className="heading">Features and Services</div>
      <div className="grids container-padding2">
        <div className="grid-base1">
          <div className="grid-base1-img1">
            <div className="base1-img1-content">
              <div className="base1-img1-heading">
                Seamless <br /> appointment
              </div>
              <div className="base1-img1-descs">
                <div className="base1-img1-desc1">
                  Contactless booking via QR code/ clinic website
                </div>
                <div className="base1-img1-desc2">
                  Effective use of receptionist's time
                </div>
                <div className="base1-img1-desc3">Eliminate errors</div>
              </div>
            </div>
            <div className="base1-img1-img">
              <div className="base1-img1-small1">
                <img src={consultation} className="consult" />
              </div>
              <div className="base1-img1-small2">
                <img src={img2} className="img2" />
              </div>
            </div>
          </div>

          <div className="grid-base1-img2">
            <div className="base1-img2-content">
              <div className="base1-img2-img">
                <img src={health} className="grid-base1-img2-conditions" />
              </div>
            </div>
            <div className="base1-img2-text">
              <div className="base1-img2-heading">Smart documentation</div>
              <div className="base1-img2-text1">
                Customized uniquely for each practice
                <br />
                Attach images/lab reports
                <br />
                Procedure/Prescription Library
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------- */}
        <div className="grid-base2">
          <div className="base2-col1-2split">
            <div className="base2-col1-2-row1">
              <div className="base2-col1-row1-small1">
                <div className="small1-text">Contactless booking</div>
                <div className="base2-wrapper">
                  <img src={qr} className="qrcode" />
                  {/* <img src={bar} className="barcode" /> */}
                </div>
              </div>
              <div className="base2-col1-row1-small2">
                <div className="small2-wrapper1">
                  Hassle free <br />
                  Securure <br />
                  Seamless
                </div>
                <div className="small2-wrapper2">
                  Data <br />
                  Migration
                </div>
              </div>
            </div>
            <div className="base2-col1-row2">
              <div className="base2-col1-row2-text1">
                <div className="text1-sub1">State of the</div>
                <div className="text1-sub2">Art Design</div>
              </div>
              <div className="base2-col1-row2-text2">
                {/* * Intuitive user-interface
                <br />
                * Tablet and mobile friendly
                <br />
                * Less typing, easy-to-click buttons */}
                <ul>
                  <li>Intuitive user-interface</li>
                  <li>Tablet and Mobile friendly</li>
                  <li>Less typing, Easy-to-click Buttons</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="base2-col2">
            <div className="base2-col2-row2-text1">
              Quick and <br />
              easy billing
            </div>
            <div className="base2-col2-row2-text2">
              {/* Automate bill desk
              <br />
              Track payments
              <br />
              Partial payments for <br />
              multi-visits */}
              <ul>
                <li>Automate bill desk</li>
                <li>Track payments</li>
                <li>Partial payments for <br></br> multi-visits</li>
              </ul>
            </div>
            <div className="base2-col2-row2-img">
              <img src={scope}></img>
            </div>
          </div>
          <div className="base2-col3">
            <div className="base2-col3-top">
              <div className="col3-top-text1">Go</div>
              <div className="col3-top-text2">Paper Less</div>
            </div>
            <div className="base2-col3-bottom">
              <img src={whats} className="whatsapp" />

              <div className="col3-bottom">
                Whatsapp/ <br />
                SMS integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grids;
