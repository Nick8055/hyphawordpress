import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import Faq from "./FAQ/Faq"
import App5 from "./App5";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import AboutUs2 from "./AboutUs2/AboutUs2";
import App6 from "./App6";
import Terms from "./Terms and Privacy/terms";
import ContactUs from "./contactUs.js";


ReactDOM.render(
  <React.StrictMode>
    <Router 
    basename={'/hw'}
    >
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/product" element={<App2 />} />
        <Route path="/aboutus" element={<App6/>}/>
        <Route path="/faq" element={<App4 />} />
        <Route path="/pricing" element={<App5 />} />
        <Route path="/termsPrivacy" element={<Terms/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
