import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/img/logo.svg";
import logoWhite from "../assets/img/logo-white.svg";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
const Navbar = () => {
  const [scrolled, setScrolled] = useState("false");
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled("true");
      } else {
        setScrolled("false");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={scrolled ? "nav nav-scrolled" : "nav"}>
      <div className="logo">
        <img
          src={logo}
          alt="Hypha"
          className="image"
          onClick={() => {
            navigate(`/`);
          }}
        />
      </div>
      <div className="nav-links">
        <ul className="nav-list">
          {/* <li className="item">About</li> */}
          <li
            className="nav-item"
            onClick={() => {
              navigate(`/product`);
            }}
          >
            Product & Pricing
          </li>
          {/* <li className="item">Join the club</li>
          <li className="item">Blogs</li> */}
        </ul>
      </div>
      <div>
        <Button value={"Sign in"} type={"button-main"} />
      </div>
    </div>
  );
};

export default Navbar;
