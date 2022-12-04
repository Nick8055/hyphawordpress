import React, { useState } from "react";
import Design from "./design/Design";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/index";
import Grids from "./Grids2/grids";
import Scrolldiv from "./scrolldiv/Scrolldiv";
import Features from "./Features/Value";
import Pricing from "./Pricing/Pricing";
import FeaturesSlider from "./FeaturesSlider/FeaturesSlider";
import Sidebar from "./Sidebar/index";
import LifeStyle from "./LifeStyleCarousel/life"
import "./App2.css";
import Value from "./Value/Value";
import Youtube from "./Youtube2/youtube"
import Transform from "./Transform copy/Transform";

function App2() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App2">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Design />
      <Youtube/> 
      <Features />
      {/* <Scrolldiv /> */}
      <Grids />
      {/* <FeaturesSlider /> */}
      <LifeStyle/>
      <Pricing />
      <Transform/>
      <Footer />
    </div>
  );
}

export default App2;
