import React from 'react'
import AboutUs from './AboutUs/AboutUs';
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import { useState } from 'react';
import Footer from "./Footer/Footer";

export const App3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     return (
        <div className='App3'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AboutUs />
            <Footer />
        </div>
  )
}

export default App3;
