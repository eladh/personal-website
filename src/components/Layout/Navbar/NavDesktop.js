import React from 'react';
import logo from '@src/static/logo.svg';

import { Link } from 'gatsby';
import { animateScroll as scroll } from 'react-scroll';

import { NavItems, NavItem } from './Navbar.style';

import NavLinks from './NavLinks';
import ToggleSwitch from '@common/ToggleSwitch';

const NavDesktop = () => {
  const scrollToHome = () => {
    scroll.scrollToTop({ smooth: true, offset: -100 });
  };

  return (
    <>
      <div
        onClick={scrollToHome}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToHome();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Link className="logo" to="/">
          <img src={logo} alt="Elad Hirsch" />
        </Link>
      </div>

      <nav>
        <NavItems>
          <NavLinks NavItem={NavItem} />

          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <ToggleSwitch />
          </NavItem>
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
