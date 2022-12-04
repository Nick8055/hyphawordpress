import "./team.css";
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import pic5 from './pic5.png';
import linkedin from './linkedin.svg';

const TeamMember = ({Name, Designation, Image, HREF}) => {
    return(
      <div>
        <div className='TeamImageContainer'>
          <img className='TeamImage' src={Image}></img>
          <a href={HREF} target="_blank"><img className='linkedinLogo' src={linkedin}></img></a>
        </div>
        <div className='memberName'>{Name}</div>
        <div className='memberDesignation'>{Designation}</div>
      </div>
    )
  }

const Team = () => {
    return(
        <div className="Team">
      <div className='TeamSection'>
        <div className='TeamTitle'>Our Team</div>
        <div className='TeamMembers'>
          <TeamMember HREF="https://www.linkedin.com/in/pranav-p-m-b2a206134/" Image={pic2} Name={'Pranav P M'} Designation={'Co-Founder'}></TeamMember>
          <TeamMember HREF="https://www.linkedin.com/in/bijun-sai-kannadath/" Image={pic3} Name={'Dr. Bijun Sai K'} Designation={'Co-Founder'}></TeamMember>
          <TeamMember HREF="https://www.linkedin.com/in/vipin-santhosh-427300195/" Image={pic4} Name={'Vipin Santhosh'} Designation={'Lead - Engineer'}></TeamMember>
          <TeamMember HREF="https://www.linkedin.com/in/advait-sunil/" Image={pic5} Name={'Advait Sunil'} Designation={'Lead - Growth'}></TeamMember>
        </div>
      </div>
      </div>
    )
    
}

export default Team;