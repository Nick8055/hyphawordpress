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
          Simplify the life of your doctors, staff and patients. 
          {/* Take your clinic to the next level by building strong patient connections. */}
        </div>
        <div className="transform-button">
          {/* <Button
            value="Schedule a Demo"
            type="button-main"
            link={"https://form.questionscout.com/60f0dc2e4823f415949a4ca4"}
          /> */}

            <a href="https://form.questionscout.com/636e62c12b4b9a231ec26c97" target="_blank">
              <button className="button-main">
                <div>Schedule a Demo</div>
              </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Transform;
