import './life.css';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import React from "react";
import Slider from "react-slick";
import pic1 from './F2.png';
import pic2 from './F1.png';
import pic3 from './F3.png';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

export default function SimpleSlider() {

  const NextArrow = ({onClick}) => {
    return(
      <div className='arrow nextArrow' onClick={onClick}>
        {/* {'>'} */}
         {/* <FaArrowRight/>  */}
         <FiChevronRight/>
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return(
      <div className='arrow prevArrow' onClick={onClick}>
        {/* {'<'} */}
       {/* <FaArrowLeft/>  */}
       <FiChevronLeft/>
      </div>
    )
  }

  const Feature = ({Heading, Desc, Image}) =>{
    return(
      <div className='FeatureContainer'>
         <h1 className=" heading FeatureHeading">{Heading}</h1>
         {/* <img className="FeatureImage" src={Image}/> */}
        <div className='FeatureHeadingAndDesc'>
          <img className="FeatureImage" src={Image}/>
          <h1 className='FeatureDesc'>{Desc}</h1>
        </div>


      </div>
    )
  }

  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    // autoplaySpeed: 9000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='SimpleSlider'>
      {/* <h1 className='Title'>Lifestyle Page</h1> */}
      {/* <h1 className='Subtitle'>Stretch your time | Plan your Day | Join the Green Side</h1> */}

      <Slider className='Slider' {...settings}>

      <Feature 
        Heading={'Stretch your Time'}
        Desc={'Get more things done within your limited time, do more business every day. By automating your mundane and tedious tasks, Hypha brings convenience at your fingertips. Use your time to grow your business. Find more time for your loved ones.'}
        Image={pic2}
       />

        <Feature
        Heading={'Plan your day anywhere, anytime.'}
        Desc={'Managing your clinic remotely has never been easier. \nOur cloud based system will give you the flexibility to manage your organization and take informed decisions on the move. Sit back, sip your coffee while you run your clinic.'}
        Image={pic3}
        />

        <Feature 
        Heading={'Join The Green Side'}
        Desc={'Going green at workplace is not just great for the planet, but for the business too. Share prescriptions and invoices over WhatsApp with a single click and eliminate the need for paper. Think Green!'}
        Image={pic1}
        />



      </Slider>
    </div>

  );
}
