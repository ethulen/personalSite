// MobileMenu.js
import React, { useState } from 'react';
import { MenuLabel, NavBackground, Icon, Navigation, List, NavLink } from './NavbarElements'; // Importing styled components

const MobileMenu = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <NavLink onClick={handleClick} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/about">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/math">
              Math
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/contact">
              Contact
            </NavLink>
          </li>
        </List>
      </Navigation>
    </>
  );
};

export default MobileMenu;
