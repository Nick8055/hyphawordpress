import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./navbar.css";
import { NavLink as NV } from "react-router-dom";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtn2,
  NavBtnWrapper,
  NavBtnLink,
  NavBtnLink2,
  NavLink,
  Img,
  NavLogoContainer,
} from "./NavbarElements";
import { hover } from "@testing-library/user-event/dist/hover";

const Nv = ({pageLink, pageName, HREF}) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return(
    <NV 
    onClick={() => {
      navigate({HREF});
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }}
      style={
        ({ isActive }) => (
          {
      color: isActive ? '#04adbf' : '#555555',
      // color: isHovering ? 'white' : 'black',
      margin: '0 5px',
      whiteSpace: 'nowrap',
      padding: '0px 22px',
      fontSize: 'var(--fs-300)',
      fontWeight: 'bold',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      textDecoration: 'none',
      }
      )
      } className="NV" to={pageLink}>{pageName}
      </NV>
  )
}

const Anchor = ({pageName, HREF}) => {
  return(
    <a 
      href={HREF}
      style={({ isActive }) => ({
      color: isActive ? '#04adbf' : '#555555',
      margin: '0 5px',
      whiteSpace: 'nowrap',
      padding: '0px 22px',
      fontSize: 'var(--fs-300)',
      fontWeight: 'bold',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      textDecoration: 'none',
      })} className="NV">{pageName}
      </a>
  )
}

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState("false");
  const navigate = useNavigate();
  // const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled("true");
      } else {
        setScrolled("false");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Nav scrolled={scrolled}>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLink onClick={() => {
                  navigate(`/`);
                  //to scroll screen to top
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }} >
              <Img src={logo} alt="Hypha" />
            </NavLink>
          </NavLogoContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                {/* <Nv pageLink={"/aboutus"} pageName={"About Us"}></Nv> */}
                <NV to="/aboutus" className="anchorJoin">About us</NV>
                {/* <a href="/aboutus"  className="anchorJoin">About Us</a> */}

              {/* <NavLink
                className="Faafaafaa"
                onClick={() => {
                  navigate(`/product`);
                  //to scroll screen to top
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Product
              </NavLink> */}

            </NavItem>

            <NavItem>

            {/* <Nv pageLink={"/product"} pageName={"Product"}></Nv> */}

            <NV to="/product" className="anchorJoin">Product</NV>

              {/* <NavLink
                onClick={() => {
                  navigate(`/pricing`);
                  //to scroll screen to top
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Pricing
              </NavLink> */}

            </NavItem>
            {/* <NavItem>
                <NavLink><Link to="aboutus">Section three</Link></NavLink>
            </NavItem> */}
            <NavItem>

            {/* <Nv pageLink={"/pricing"} pageName={"Pricing"}></Nv> */}

            <NV to="/pricing" className="anchorJoin">Pricing</NV>

              {/* <NavLink
                onClick={() => {
                  navigate(`/aboutus`);
                  //to scroll screen to top
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                About Us
              </NavLink> */}

            </NavItem>

            

            {/* <NavItem>
              <NavLink
                onClick={() => {
                  navigate(`/aboutus`);
                  //to scroll screen to top
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Blogs
              </NavLink>
            </NavItem> */}

            {/* <NavItem>
              <NavLink
                onClick={() => {
                  navigate(`/product`);
                  //to scroll screen to top
                  window.scrollTo({ top: 5700, left: 0, behavior: "smooth" });
                }}
              >
                Pricing
              </NavLink>
            </NavItem> */}

            <NavItem>
              {/* <Anchor pageName={"Join the Club"} HREF={"https://form.questionscout.com/636e64bc2b4b9a0679c26da3"}></Anchor> */}

              {/* <a 
              href="https://form.questionscout.com/636e64bc2b4b9a0679c26da3" 
              className="anchorJoin"
              target="blank"
                    // style={{
                    //   color: '#555555',
                    //   margin: '0 5px',
                    //   whiteSpace: 'nowrap',
                    //   padding: '0px 22px',
                    //   fontSize: 'var(--fs-300)',
                    //   fontWeight: 'bold',
                    //   outline: 'none',
                    //   border: 'none',
                    //   cursor: 'pointer',
                    //   transition: 'all 0.2s ease-in-out',
                    //   textDecoration: 'none',
                    //   }}
                    ><div>Join Club</div></a> */}

            <NavLink
                href="https://form.questionscout.com/636e64bc2b4b9a0679c26da3"
                target="blank"
                aria-label="Hypha Clinic"
              >
                <a>Join the Club</a>
              </NavLink>

            </NavItem>
          </NavMenu>
          <NavBtnWrapper>
            <NavBtn2>
              {/* <NavLink
                href="https://form.questionscout.com/60f0dc2e4823f415949a4ca4"
                target="blank"
                aria-label="Hypha Clinic"
              >
                Join the Club
              </NavLink> */}
            </NavBtn2>
            <NavBtn>
              <NavBtnLink2
                href="https://practice.hypha.care/"
                target="blank"
                aria-label="Hypha Clinic"
              >
                <a>SIGN IN</a>
              </NavBtnLink2>
            </NavBtn>
            <NavBtn>
              <NavBtnLink
                href="https://form.questionscout.com/636e62c12b4b9a231ec26c97"
                target="blank"
                aria-label="Hypha Clinic"
              >
                <a>BOOK DEMO</a>
              </NavBtnLink>
            </NavBtn>
          </NavBtnWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
