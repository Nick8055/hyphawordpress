import "./Transform.css";

import React from "react";
import Button from "../Buttons/Button";

const Transform = () => {
  return (
    <div className="transform container-padding">
      <div className="transform-wrapper">
        <div className="heading">
        Committed to care for a healthier future?{" "}
        </div>
        <div className="transform-desc">
        We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values. 
          {/* Take your clinic to the next level by building strong patient connections. */}
        </div>
        <div className="transform-button">
          {/* <Button
            value="Join Our Team"
            type="button-main"
            link={"https://form.questionscout.com/60f0dc2e4823f415949a4ca4"}
          /> */}
          <a href="https://form.questionscout.com/636e64bc2b4b9a0679c26da3" target="_blank">
              <button className="button-main">
                <div>Join Our Team</div>
              </button>
         </a>
        </div>
      </div>
    </div>
  );
};

export default Transform;
