import React from 'react'
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import { useState } from 'react';
import Footer from "./Footer/Footer";
import Pricing from "./Pricing/Pricing";
import Transform from './Transform Pricing/Transform';
import "./App5.css";

export const App5 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     return (
        <div className='App5'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Pricing />
            <Transform/>
            <Footer />
        </div>
  )
}

export default App5;