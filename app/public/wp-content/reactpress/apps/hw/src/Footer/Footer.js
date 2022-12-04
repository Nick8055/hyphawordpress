import "./Footer.css";
import logoWhite from "../assets/img/logo-white.svg";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
// import Faq from "./FAQ/Faq";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqrvzdo");
  if (state.succeeded) {
    return (
      <div className="footer-site-map-item">
        Thank you for your enquiry.<br></br> We will get back to you shortly
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="footer-input-container">
      <input type="text" name="name" placeholder="Name"></input>
      <input type="text" name="Phone Number" placeholder="Phone number"></input>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email ID"
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <ValidationError
        prefix="Phone Number"
        field="Phone Number"
        errors={state.errors}
      />
      <div>
        <button
          className="footer-right-button"
          type="submit"
          disabled={state.submitting}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </form>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const number = 7760441314;
  return (
    <div className="footer container-padding">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logoWhite} />
        </div>
        <div className="footer-social-contact">
          {/* <div>Contact us</div>
          <br /> */}
          {/* <br></br><br></br> */}
          <div>Contact : +91 7760441314</div>
          <br />
          <div>Email ID : support@hypha.care</div>
          <br />
          <div className="footer-social-container">

              <a href="https://www.facebook.com/hyphaclub/" target="_blank">
                <div  className="footer-social-circle">
                  <RiFacebookFill />
                </div>
              </a>

              <a href="https://www.instagram.com/hypha.club/" target="_blank">
                <div  className="footer-social-circle">
                <GrInstagram />
                </div>
              </a>

              <a href={`https://api.whatsapp.com/send?phone=91${number}`} target="_blank">
                <div  className="footer-social-circle">
                <SiWhatsapp />
                </div>
              </a>

              <a href="https://www.linkedin.com/company/hypha-club/" target="_blank">
                <div  className="footer-social-circle">
                <FaLinkedinIn />
                </div>
              </a>

          </div>
        </div>
      </div>

      <div className="footer-site-map">
        <div className="footer-site-map-item">
          <div className="footer-site-map-heading">Product</div>
          <div onClick={() => {navigate(`/product`);window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className="footer-site-map-item">Overview</div>
          <div onClick={() => {navigate("/pricing");window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className="footer-site-map-item">Pricing</div>
          <div onClick={() => {navigate("/faq");window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className="footer-site-map-item">FAQs</div>
          <div onClick={() => {navigate("/termsPrivacy");window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className="footer-site-map-item">Terms And Privacy</div>
          {/* <div className="footer-site-map-item"><a href="https://accounts.intuit.com/terms-of-service" target="_blank">Terms And Privacy</a></div> */}
          {/* <div className="footer-site-map-item" onClick={() => window.location.replace("/#s4")}>FAQs</div> */}
          {/* <div className="footer-site-map-item" onClick={() => window.location.replace("/#s4")}>Terms and Privacy</div> */}
        </div>
         <div className="footer-site-map-item">
          <div className="footer-site-map-heading">Company</div>

          <div onClick={() => {navigate("/aboutus");window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className="footer-site-map-item">About Us</div>
          {/* <div className="footer-site-map-item">Our Team</div> */}
          {/* <div className="footer-site-map-item">Newsroom</div> */}
          {/* <div className="footer-site-map-item">Careers</div> */}
          <div onClick={() => {navigate("/contactus");window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}} className="footer-site-map-item">Contact Us</div>
        </div>
        <div className="footer-site-map-item">
          <div className="footer-site-map-heading">Community</div>

          <div className="footer-site-map-item">COMING SOON !!!</div>

          {/* <div className="footer-site-map-item">Blogs</div>
          <div className="footer-site-map-item">Newsletter</div>
          <div className="footer-site-map-item">Webinars</div>
          <div className="footer-site-map-item">Events</div> */}
        </div> 
      </div>
      <div className="footer-right">
        <div className="footer-right-container">
          {/* <div className="footer-right-overline">DEMO</div> */}
          <div className="footer-right-heading">Request a demo</div>
          <div className="footer-input-container">
            <ContactForm />
            <h2 className="FooterLastSentence">© 2022, Fraktal Ecosystems Pvt. Ltd. All Rights Reserved.</h2>
            {/* <form onSubmit={handleSubmit} className="footer-input-container">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="Phone Number" placeholder="Phone number"></input>
            <input id='email' type="email" name="email" placeholder="Email ID"></input>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <ValidationError prefix="Phone Number" field="Phone Number" errors={state.errors} />
            <div className="footer-right-button">
                <button className="footer-right-button" type="submit" disabled={state.submitting}><AiOutlineArrowRight /></button>
            </div>
           </form>  */}
          </div>
        </div>
        {/* <div className="footer-right-button">
           <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
             <Button
              value={<AiOutlineArrowRight />}
              type={"button-light-icon"}
              disabled={state.submitting}
             /> 
          </IconContext.Provider> 
        </div> */}
      </div>
      {/* <h2 className="FooterLastSentence">© 2022, Fraktal Ecosystems Pvt. Ltd. All Rights Reserved.</h2> */}
    </div>
  );
};

export default Footer;
