import "./AboutUs2.css";
import Navbar from "../Navbar/index";
import Scrolldiv from "../scrolldiv/Scrolldiv";
import Sidebar from "../Sidebar/index";
import Footer from "../Footer/Footer";
import { useState } from "react";
import FirstPage from "./Components/First Page/firstPage";
import OurStory from "./Components/Our Story/ourStory";
import Youtube from "../Youtube/youtube";
import Team from "./Components/Team Members/team";
import Values from "./Components/Value Section/value";
import Transform from "../Transform About Us/Transform";

const AboutUs2 = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {
    //   setIsOpen(!isOpen);
    // };

    return(
        <div className="AboutUs2">
            {/* <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> */}
            <FirstPage/>
            <Youtube/>
            <OurStory/>
            <Team/>
            <Values/>
            <Transform/>
            {/* <Footer/> */}
        </div>
    )
}

export default AboutUs2;