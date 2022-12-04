import React, { useState } from "react";
import "./Pricing.css";
import WhatsappButton from "../Whatsapp Enterprise Button/WhatsappButton";
const Pricing = () => {
  const Plan = ({
    no_of_admins,
    no_of_doctors,
    plan_price,
    feature_type,
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
    feature55,
    feature66,
    feature77,
    
  }) => {
    //For 'stylingType' parameter, use integer value 0 for highlighted styling or integer value 1 for normal styling

    const [stylingType, setIsHover] = useState(true);

    const handleMouseEnter = () => {
      setIsHover(false);
    };
    const handleMouseLeave = () => {
      setIsHover(true);
    };

    return (
      <div
        className={stylingType ? "PlanContainer" : "PlanContainerAlternate"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="PlanContainerPart2">
          <h1
            className={
              stylingType ? "FeatureTypeText" : "FeatureTypeTextAlternate"
            }
          >
            {feature_type}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature1}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature2}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature3}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature4}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature5}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature6}
          </h1>
          <h1 className={stylingType ? "FeatureText" : "FeatureTextAlternate"}>
            {feature7}
          </h1>
          <h1 className={stylingType ? "FeatureText2" : "FeatureTextAlternate2"}>
            {feature55}
          </h1>
          <h1 className={stylingType ? "FeatureText2" : "FeatureTextAlternate2"}>
            {feature66}
          </h1>
          <h1 className={stylingType ? "FeatureText2" : "FeatureTextAlternate2"}>
            {feature77}
          </h1>
        </div>

        <div
          className={
            stylingType
              ? "PlanContainerPart1 PlanPositioning"
              : "PlanContainerPart1Alternate PlanPositioning"
          }
        >
          {feature_type !== "Enterprise" && (
            <div className={"PlanPositioningTop"}>
              <br/>
              <h1 className={stylingType ? "PlanPrice" : "PlanPriceAlternate"}>
               <div className="PriceAmount">₹{plan_price}</div> <div className="PerYear">per month</div>
              </h1>
              <h1
                className={
                  stylingType ? "AdminsDoctors" : "AdminsDoctorsAlternate"
                }
              >
                {/* {no_of_admins} Admin . {no_of_doctors} Doctors */}
                Billed Annually<br/><br/>
                Upto {no_of_admins + no_of_doctors} users
              </h1>
              {/* <h1 className={stylingType ? "PlanPrice" : "PlanPriceAlternate"}>
                ₹{plan_price} / Annum
              </h1> */}
              <button
                className={stylingType ? "ButtonStyle" : "ButtonStyleAlternate"}
              >
                <a
                  href={
                    "https://rzp.io/l/hypha"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {" "}
                  Sign Up Now
                </a>
              </button>
              <br/>
            </div>
          )}

          {feature_type === "Enterprise" && (
            <div className={"PlanPositioningTop"}>
              {/* <h1 className={stylingType ? "PlanPrice" : "PlanPriceAlternate"}>
                Let's Talk
              </h1> */}

              {/* <button
                className={stylingType ? "ButtonStyle" : "ButtonStyleAlternate"}
              >
                Let's Talk
              </button> */}

              <WhatsappButton
                type={stylingType ? "ButtonStyle" : "ButtonStyleAlternate"}
                value={"Let's Talk"}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="heading">Pricing</h1>
      <div className="Pricing container-padding2">
        <div className="PlanContainerFlexbox">

          <Plan
            no_of_admins={2}
            no_of_doctors={0}
            plan_price={500}
            feature_type={"Basic"}
            
            feature1={"Appointment Manager"}
            feature2={"Consultation Records"}
            feature3={"Invoice Manager"}
            feature4={"SMS service"}
          />

          <Plan
            no_of_admins={0}
            no_of_doctors={4}
            plan_price={700}
            feature_type={"Standard"}
            feature1={"Appointment Manager"}
            feature2={"Consultation Records"}
            feature3={"Invoice Manager"}
            feature4={"SMS service"}
            feature55={"Dashboard Analytics"}
            feature66={"Whatsapp Service"}
          />

          <Plan
            no_of_admins={0}
            no_of_doctors={4}
            plan_price={800}
            feature_type={"Premium"}
            feature1={"Appointment Manager"}
            feature2={"Consultation Records"}
            feature3={"Invoice Manager"}
            feature4={"SMS service"}
            feature5={"Dashboard Analytics"}
            feature6={"Whatsapp Service"}
            feature77={"Custom Clinic Website"}
          />

          <Plan
            // no_of_admins={3}
            // no_of_doctors={2}
            // plan_price={6000}
            feature_type={"Enterprise"}
            // feature1={"Contact Sales"}
            // feature2={"SMS Service"}
            // feature3={"24/7 Customer Support"}
          />
        </div>
        <h1 className="Pricing-Footer">
          Additional user - ₹1000 /Annum/User <br></br> Additional clinic - ₹5000
          /Annum/Clinic{" "}
        </h1>
      </div>
    </div>
  );
};

export default Pricing;
