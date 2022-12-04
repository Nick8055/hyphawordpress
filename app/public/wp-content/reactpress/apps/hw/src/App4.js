import React from 'react'
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import { useState } from 'react';
import Footer from "./Footer/Footer";
import Faq from "./FAQ/Faq";

export const App4 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
     return (
        <div className='App4'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Faq />
            <Footer />
        </div>
  )
}

export default App4;