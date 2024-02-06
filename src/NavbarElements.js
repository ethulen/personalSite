import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #304529;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25px;
    /* Third Nav */
    /* justify-content: flex-start; */
`
    ;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;

export const COLORS = {
    primaryDark: "#f5ece5",
    primaryLight: "#304529",
};

export const MenuLabel = styled.label`
    background-color: ${COLORS.primaryLight};
    position: fixed;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    cursor: pointer;
    z-index: 1000;
    text-align: center;
  `;

export const NavBackground = styled.div`
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(
      ${COLORS.primaryDark},
      ${COLORS.primaryLight}
    );
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    z-index: 600;
    transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
    transition: transform 0.8s;
  `;

export const Icon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked ? "transparent" : "black")};
    width: 3rem;
    height: 2px;
    display: inline-block;
    margin-top: 3.5rem;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      background-color: black;
      width: 3rem;
      height: 2px;
      display: inline-block;
      position: absolute;
      left: 0;
      transition: all 0.3s;
    }
    &::before {
      top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "0" : "0.8rem")};
      transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
    ${MenuLabel}:hover &::before {
      top: ${(props) => (props.clicked ? "0" : "-1rem")};
    }
    ${MenuLabel}:hover &::after {
      top: ${(props) => (props.clicked ? "0" : "1rem")};
    }
  `;

export const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    transition: width 0.8s, opacity 0.8s;
  `;

export const List = styled.ul`
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  `;
export const ItemLink = styled.a`
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: ${COLORS.primaryLight};
    padding: 1rem 2rem;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    cursor:pointer;
    &:hover,
    &:active {
      background-position: 100%;
      color: black;
      transform: translateX(1rem);
    }
  `;