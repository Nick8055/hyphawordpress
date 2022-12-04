import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Scrolldiv.css";
import img1 from "../assets/img/Patient registration.png";
import img2 from "../assets/img/book appointment.png";
import img3 from "../assets/img/record treatments.png";
import img4 from "../assets/img/Frame.png";
import img5 from "../assets/img/Generate invoice.png";
const Scrolldiv = () => {
  return (
    <>
      <div className="scrolldiv container-padding">
        <div className="scroll-text ">
          <div className="heading">Futuristic And Feature Rich</div>
          <div className="subtitle">
            Our Clinicians love us. We are Pocket friendly and more capable
          </div>
        </div>
        <div className="containerForScroll">
          <ScrollContainer className="scroll-container">
            <div className="scroll-item">
              <img className="scroll-item-img" src={img1}></img>
              <div className="scroll-item-text">Patient Registration</div>
            </div>
            <div className="scroll-dot-element"></div>
            <div className="scroll-item">
              <img className="scroll-item-img" src={img2}></img>
              <div className="scroll-item-text">Book Appointment</div>
            </div>
            <div className="scroll-dot-element"></div>
            <div className="scroll-item">
              <img className="scroll-item-img" src={img4}></img>
              <div className="scroll-item-text">
                SMS & Whatsapp Notification
              </div>
            </div>
            <div className="scroll-dot-element"></div>
            <div className="scroll-item">
              <img className="scroll-item-img" src={img3}></img>
              <div className="scroll-item-text">Record Treatment Notes</div>
            </div>

            <div className="scroll-dot-element"></div>
            <div className="scroll-item">
              <img className="scroll-item-img" src={img5}></img>
              <div className="scroll-item-text">Generate Invoice</div>
            </div>
          </ScrollContainer>
        </div>
      </div>
    </>
  );
};

export default Scrolldiv;
