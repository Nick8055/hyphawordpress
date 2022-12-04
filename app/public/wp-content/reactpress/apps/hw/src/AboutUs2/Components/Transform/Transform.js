import "./Transform.css";

import React from "react";
import Button from "../Buttons/Button";

const Transform = () => {
  return (
    <div className="transform container-padding">
      <div className="transform-wrapper">
        <div className="heading">
          Ready to transform how you <br />
          run your clinic?{" "}
        </div>
        <div className="transform-desc">
          Simplify the life of your doctors, staffs and patients. 
          {/* Take your clinic to the next level by building strong patient connections. */}
        </div>
        <div className="transform-button">
          <Button
            value="Join Our Team"
            type="button-main"
            link={"https://form.questionscout.com/636e64bc2b4b9a0679c26da3"}
          />
        </div>
      </div>
    </div>
  );
};

export default Transform;
