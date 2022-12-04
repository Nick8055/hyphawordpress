import React from 'react'
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import { useState } from 'react';
import Footer from "./Footer/Footer";
// import Transform from './Transform Pricing/Transform';
import AboutUs2 from './AboutUs2/AboutUs2';

export const App6 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     return (
        <div className='App6'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AboutUs2/>
            <Footer />
        </div>
  )
}

export default App6;