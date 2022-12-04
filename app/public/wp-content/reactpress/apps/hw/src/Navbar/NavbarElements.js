import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${(props) =>
    props.scrolled === "true" ? "rgb(238, 238, 238)" : "#fff"};
  /* height: 60px; */

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1001;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr 0.7fr;
  /* height: 80px; */
  z-index: 1;
  width: 100%;
  margin: 1%;
  padding: 0 6%;
  /* padding: 3%; */
  padding-top: 10px;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  /* max-width: 1100px; */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 0.1fr;
  }
  @media screen and (max-width: 500px) {
    margin: 3%;
    padding: 0;
    grid-template-columns: 1fr 1fr 0.3fr;
  }
`;

export const NavLogoContainer = styled.div`
  cursor: pointer;
  align-self: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    width: 60%;
    margin-left: 3%;
  }
`;

export const NavLogo = styled(LinkR)`
  /* margin-left: 24px; */
  /* margin-top: 2%; */

  /* @media screen and (max-width: 500px) {
    margin-top: 3%;
  } */
`;

export const Img = styled.img`
  /* height: 70%;
  place-self: center;

  @media screen and (max-width: 768px) {
    height: 90%;
  }
  @media screen and (max-width: 350px) {
    height: 90%;
  } */
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    align-items: center;
    display: block;
    position: absolute;
    /* top: -0.4rem; */
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8em;
    cursor: pointer;
    color: #04adbf;
  }
`;

export const NavMenu = styled.ul`
  place-self: center;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  /* height: 80px; */
`;
export const NavLinks = styled(LinkS)`
  color: #414042;
  /* display: flex; */
  /* align-items: center; */
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  font-size: var(--fs-300);
  line-height: 134.6%;
  /* identical to box height, or 35px */
  font-family: "Muli-Semi-Bold";
  letter-spacing: 0.025em;

  &.active {
    border-bottom: 3px solid #07b9d1;
  }
`;

export const NavBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: end;
  gap: 5px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-top: 5%; */
  /* @media screen and (max-width: 768px) {
    padding-right: 2vw;
  } */
  /* @media screen and (max-width: 500px) {
    width: 100%;
  } */
`;
export const NavBtn2 = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 7px;
  background: #04adbf;
  white-space: nowrap;
  padding: 8px 22px;
  color: #fff;
  font-size: var(--fs-300);
  font-family: "Muli-Medium";
  outline: none;
  border-style: solid;
  border-color: #04adbf;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  transform: scale(0.9);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #04adbf;
    border-style: solid;
    border-color: #04adbf;
  }
  @media screen and (max-width: 768px) {
    padding: 8px 18px;
    color: #fff;
    font-size: 16px;
    transform: scale(0.9);
  }
  @media screen and (max-width: 350px) {
    padding: 8px 15px;
    color: #fff;
    font-size: 12px;
  }
`;

export const NavBtnLink2 = styled.a`
  border-radius: 7px;
  background: #fff;
  white-space: nowrap;
  padding: 8px 22px;
  color: #04adbf;
  font-size: var(--fs-300);
  font-family: "Muli-Medium";
  outline: none;
  border-style: solid;
  border-color: #04adbf;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  transform: scale(0.9);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #04adbf;
    color: #fff;
    border-style: solid;
    border-color: #04adbf;
  }
  @media screen and (max-width: 768px) {
    padding: 8px 18px;
    // color: #fff;
    font-size: 16px;
    transform: scale(0.9);
  }
  @media screen and (max-width: 350px) {
    padding: 8px 15px;
    // color: #fff;
    font-size: 12px;
  }
`;

export const NavLink = styled.a`
  border-radius: 5px;
  margin: 0 5px;
  white-space: nowrap;
  padding: 0px 22px;
  color: #555555;
  font-size: var(--fs-300);
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

   &:hover {
    transition: all 0.2s ease-in-out;
    // background: #ced1d1;
    color: #04adbf;
  } 

  &.active {
    color: #fff;
    background: #7600dc;
  }
  
  @media screen and (max-width: 768px) {
    padding: 8px 18px;
    color: #fff;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    padding: 6px 15px;
    color: #fff;
    font-size: 10px;
  }
`;
