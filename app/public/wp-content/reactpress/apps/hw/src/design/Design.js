import React from "react";
import "./Design.css";
import Artboard from "../assets/img/Father Xmas.png";
import WhatsappButton from "../Whatsapp Button/WhatsappButton";
import Button from "../Buttons/Button";
const Design = () => {
  return (
    <div className="design design-container-padding">
      <div className="design-img-div">
        <img src={Artboard} className="artboard" />
      </div>
      <div className="design-heading">
        <div className="design-main">Designed To Delight</div>
        <div className="design-sub">
        Intuitive design is how we give our clinicians new superpowers. Hypha's tablet friendly user-interface is easy to adapt and use.
        </div>
        <div className="design-button-container">
          <WhatsappButton  value={"Schedule demo"} type={"button-main"} />
        </div>
        {/* <div className="design-under">
                    <img src={under} className="under" />    
                </div> */}
      </div>
    </div>
  );
};

export default Design;
