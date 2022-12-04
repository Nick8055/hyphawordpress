import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./Button.css";
const Button = ({ value, type, link }) => {
  return (
    <div className="button">
      <a
        href={link}
        className={type}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {value}
      </a>
    </div>
  );
};

export default Button;
