import "./App.css";
import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/index";
import Value from "./Value/Value";
import Evolve from "./Evolve/Evolve";
import Transform from "./Transform/Transform";
import Footer from "./Footer/Footer";
import Slider from "./Slider/Slider";
import Sidebar from "./Sidebar/index";
import Faq from "./FAQ/Faq";
import Youtube from "./Youtube/youtube"
import ScreenShotSlider from "./ScreenShotSlider/ScreenShotSlider";
import YellowBox from "./YellowBox/ybox";
import Futuristic from "./Futuristic/futuristic";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App6 FuturisticCom">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="FuturisticCom">
      <Hero />
      <YellowBox/>
      </div>
      <div className="FuturisticCom">
      <Futuristic/>
      </div>
      {/* <Futuristic/> */}
      <Value />
      <Youtube/> 
      <div className="FuturisticCom">
      <Evolve />
      </div>
      <Faq />
      <Transform />
      <Footer/>
    </div>
  );
}

export default App;
