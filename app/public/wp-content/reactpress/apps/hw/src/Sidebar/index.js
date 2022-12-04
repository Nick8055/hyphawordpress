import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLink2,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={() => {
              navigate(`/product`);
              //to scroll screen to top
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              // toggle();
            }}
          >
            Product
          </SidebarLink>
          <SidebarLink
            onClick={() => {
              navigate(`/pricing`);
              //to scroll screen to top
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              // toggle();
            }}
          >
            Pricing
          </SidebarLink>
          <SidebarLink
            onClick={() => {
              navigate(`/aboutus`);
              //to scroll screen to top
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              // toggle();
            }}
          >
            About Us
          </SidebarLink>
          {/* <SidebarLink */}
            {/* onClick={() => { */}
              {/* navigate(`/aboutus`); */}
              {/* //to scroll screen to top */}
              {/* window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); */}
              {/* // toggle(); */}
            {/* }} */}
          {/* > */}
            {/* Blogs */}
          {/* </SidebarLink> */}
          <SidebarLink2
            href="https://form.questionscout.com/636e64bc2b4b9a0679c26da3"
            target="blank"
            aria-label="Hypha Clinic"
          >
            Join the Club
          </SidebarLink2>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute
            href="//clinic.hypha.care/"
            target="blank"
            aria-label="Hypha Clinic"
            onClick={toggle}
          >
            Join the Club
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
