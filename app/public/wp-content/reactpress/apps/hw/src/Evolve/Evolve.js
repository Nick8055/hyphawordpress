import "./Evolve.css";
import WhatsappButton from "../Whatsapp Button/WhatsappButton";
import React from "react";
import Button from "../Buttons/Button";

const Evolve = () => {
  return (
    <div className="evolve">
      <div className="evolve-text-wrapper">
        <div className="headingEvolve evolveHeading">evolve together</div>
        <div className="evolve-text-desc">
          We at hypha, enable every healthcare providers and patients to connect
          and collaborate with one another for the collective growth of everyone
          participating. Because, we believe, at our core, that collaboration
          can lead to excellence.
        </div>
        <div className="evolve-text-sub">We welcome you to club hypha!</div>
        <div className="evolve-button">
          <WhatsappButton value="Schedule demo" type="button-main" />
        </div>
      </div>
      {/* <div className="evolve-background"></div> */}
    </div>
  );
};

export default Evolve;
