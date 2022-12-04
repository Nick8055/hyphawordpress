import React from "react";
import { isMobile, isDesktop, isIPad13, isTablet } from "react-device-detect";
import "./WhatsappButton.css";

const WhatsappButton = ({ type, value }) => {
  const number = 7760441314;
  return (
    <div>
      {" "}
      {isMobile && !isIPad13 && (
        // <div className="button">
        //   <a
        //     href={`https://api.whatsapp.com/send?phone=91${number}`}
        //     className={type}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     onClick={(e) => {
        //       e.stopPropagation();
        //     }}
        //   >
        //     <div>{value}</div>
            
        //   </a>
        // </div>

            <a 
            // href={`https://web.whatsapp.com/send?phone=91${number}`}
            href='https://form.questionscout.com/636e62c12b4b9a231ec26c97'
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-Button"
            >
            <button 
            onClick={(e) => {
            console.log(number);
            e.stopPropagation();
            }}
            className={type}>
            <div>{value}</div>
            </button>
            </a>
      )}
      {isDesktop && !isIPad13 && (
        // <div className="button">
        //   <a
        //     href={`https://web.whatsapp.com/send?phone=91${number}`}
        //     className={type}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     onClick={(e) => {
        //       console.log(number);
        //       e.stopPropagation();
        //     }}
        //   >
        //     {value}
        //   </a>
        // </div>

        <a 
        // href={`https://web.whatsapp.com/send?phone=91${number}`}
        href='https://form.questionscout.com/636e62c12b4b9a231ec26c97'
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-Button"
        >
        <button 
        onClick={(e) => {
        console.log(number);
        e.stopPropagation();
        }}
        className={type}>
        <div>{value}</div>
        </button>
        </a>
      )}
      {isIPad13 && (
        // <a
        //   href={`https://web.whatsapp.com/send?phone=91${number}`}
        //   className={type}
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   onClick={(e) => {
        //     e.stopPropagation();
        //   }}
        // >
        //   {value}
        // </a>

        <a 
        // href={`https://web.whatsapp.com/send?phone=91${number}`}
        href='https://form.questionscout.com/636e62c12b4b9a231ec26c97'
        target="_blank"
        rel="noopener noreferrer"
        // className="whatsapp-Button"
        >
        <button 
        onClick={(e) => {
        console.log(number);
        e.stopPropagation();
        }}
        className={type}>
        <div>{value}</div>
        </button>
        </a>
      )}
    </div>
  );
};

export default WhatsappButton;
