import './AboutUs.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import pic5 from './pic5.png';
import linkedin from './linkedin.svg';
import ScrollContainer from "react-indiana-drag-scroll";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import React from 'react';
import { useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const TeamMember = ({Name, Designation, Image}) => {
  return(
    <div>
      <div className='TeamImageContainer'>
        <img className='TeamImage' src={Image}></img>
        <img className='linkedinLogo' src={linkedin}></img>
      </div>
      <div className='memberName'>{Name}</div>
      <div className='memberDesignation'>{Designation}</div>
    </div>
  )
}

const OurValues = ({valueHeading, valueDesc}) => {
  return(
    <div className='valueContainer'>
      <div className='valueHeading'>{valueHeading}</div>
      <div className='valueDesc'>{valueDesc}</div>
    </div>
  )
}

const BlueContainer = ({blueDesc}) => {
  return(
    <div>
      <div className='blueContainer'>
        <div className='blueContainerContent'>{blueDesc}</div>
      </div>
    </div>
  )
}

const AboutUs = () => { 

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className="AboutUs">

      {/* <div className='mainTitle'>Our Story</div> */}
      {/* <a href='#s4'>DD</a> */}
      {/* <div className=" heading mainTitle">Our Story</div> */}
      <div className='para1Andpic1Flexbox'>
        <div className='paragraph para1'>Hypha is bringing together a community of healthcare providers and patients to build the future of medical practice.</div>
        <div className='pic1Container'><img className='pic1' src={pic1}></img></div>
      </div>

      <div className='paragraph slogan'>Evolve Together</div>
      <div className='paragraph para2'>Perspectives have changed. And so have our needs. People around the world are looking forward to an improved quality of life. They focus not just on being illness-free but also on their overall well-being. Patients want access to personalised care and Doctors are eager to provide it to them.</div>
      <div className='paragraph para3'>While healthcare systems are getting modernised and fighting illnesses better than ever, incorporating patient-first experiences is still not a routine practice. Because, unlike top hospitals that leverage Artificial Intelligence to develop their care models, Clinicians lack access to the right tools. That is, until we decided to bridge modern technology with people’s needs - all for a stronger tomorrow.</div>
      {/* <div className='paragraph dot'>●</div> */}
      <div className='paragraph slogan2'>Redefining Healthcare</div>
      <div className='paragraph para3'>Realizing the need to provide patients with the care and relief they deserve, led us to develop Hypha. So, we ventured into the market as a state-of-the-art clinic management software that reduces the Clinicians’ burden by simplifying non-medical activities. It keeps patient information and records in place, making processes easier for doctors, while involving patients in the care they receive.</div>

      <div className='secondContainer'>
        <div className='secondContainerSub'>
          <div className='title2'>Why do we call it Hypha?</div>
          <div className='paragraph para4'>Derived from Hyphae - the Greek word for ‘web’ Hypha symbolises a growing network of healthcare providers and patients. Mirroring the strength of a mycelial network, the platform is designed to provide a collaborative experience by aiding growth and communication.
          <br></br><br></br>Just like the mycelium work flawlessly to form a strong ecosystem, Hypha strives for a smoother and stronger healthcare system - for doctors as well as patients.</div>
        </div>
      </div>


      <div className='title3'>Why Choose Us?</div>


      <div  id='blueContainerDiv' className='blueContainerDiv'>
        <div id='slider' className='blueContainerSection scroll-container'>
          <BlueContainer blueDesc={'India’s only patient management system for personalised care.'}></BlueContainer>
          <BlueContainer blueDesc={'Keeps patients involved and informed in the care they receive.'}></BlueContainer>
          <BlueContainer blueDesc={'A members-only club that helps healthcare providers simplify processes.'}></BlueContainer>
          <BlueContainer blueDesc={'Helps clinicians retain patients by delivering patient-first care.'}></BlueContainer>
          <BlueContainer blueDesc={'Organises patient records and optimises non-medical activities for ease-of-use.'}></BlueContainer>
        </div>
        <button className=' blueContainerButtonR opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight}><FiChevronRight/></button>
        <button className=' blueContainerButtonL opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft}><FiChevronLeft/></button>
      </div>


      <div className='section4' id='s4'>
        <div className='title4 t4'>Our Mission</div>
        <div className='paragraph para5'>To help healthcare providers strengthen relationships with their patients by simplifying the care-giving process with our clinic management software.</div>
        <div className='title4 t4'>Our Vision</div>
        <div className='paragraph para5'>To form a strong community of healthcare providers and patients that drives excellence and growth, collectively</div>
      </div>

      <div className='TeamSection'>
        <div className='TeamTitle'>Our Team</div>
        <div className='TeamMembers'>
          <TeamMember Image={pic2} Name={'Pranav P M'} Designation={'Co-Founder'}></TeamMember>
          <TeamMember Image={pic3} Name={'Bijun Sai Kannadath'} Designation={'Co-Founder'}></TeamMember>
          <TeamMember Image={pic4} Name={'Vipin Santhosh'} Designation={'Lead - Engineer'}></TeamMember>
          <TeamMember Image={pic5} Name={'Advait Sunil'} Designation={'Lead - Growth'}></TeamMember>
        </div>
      </div>

      <div className='title4'>Our Values</div> 

      <div className='valueSection'>
        <OurValues valueHeading={'Explore'} valueDesc={'The path towards achieving excellence is not easy. Be courageous and finish what you’ve undertaken with utmost determination.'}></OurValues>
        <OurValues valueHeading={'Evolve'} valueDesc={'We believe in collaborating and learning from one another. Because, excellence is driven better when you’re together.'}></OurValues>
        <OurValues valueHeading={'Encourage'} valueDesc={'Your breakthroughs at the workplace promote personal growth. But more importantly, they inspire others to grow.'}></OurValues>
        <OurValues valueHeading={'Ensure'} valueDesc={'Take accountability for your work and everything you build to ensure customer satisfaction.'}></OurValues>
      </div>

      <div className='lastSection'>
        {/* <div className='greyLine'></div> */}
        <div className=' lastTitle'>Committed to care for a healthier future?</div>
        <button className='joinUsButton'>Join Us</button>
      </div>


    </div>
  );
}

export default AboutUs;
