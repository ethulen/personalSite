// Navbar.js
import React, { useState, useEffect } from 'react';
import { Nav, NavMenu, NavLink } from './NavbarElements';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      {isMobile && <MobileMenu />}
      <NavMenu isOpen={isOpen}>
        <NavLink to="/" onClick={toggleMobileMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMobileMenu}>
          About
        </NavLink>
        <NavLink to="/math" activeStyle onClick={toggleMobileMenu}>
          Math
        </NavLink>
        <NavLink to="/portfolio" activeStyle onClick={toggleMobileMenu}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeStyle onClick={toggleMobileMenu}>
          Contact
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
