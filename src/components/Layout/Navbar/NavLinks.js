import React from 'react';
import { Link as SLink } from 'react-scroll';

const NavItemsSmoothLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <SLink smooth offset={-70} hashSpy to="home">
        Home
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="about">
        About
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="evangelism">
        Evangelism
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="contact">
        Reachout
      </SLink>
    </NavItem>
  </>
);

const NavLinks = React.memo(({ NavItem }) => {
  return (
      <NavItemsSmoothLinks NavItem={NavItem} />
  );
});

export default NavLinks;
