import "./Transform.css";

import React from "react";
import Button from "../Buttons/Button";

const Transform = () => {
  return (
    <div className="transform container-padding">
      <div className="transform-wrapper">
        <div className="heading">
        We’re pocket friendly<br></br>yet more capable{" "}
        </div>
        <div className="transform-desc">
        Our digital toolkit will simplify and improve your care delivery.
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
