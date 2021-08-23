import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react";
import styled from "styled-components";

const Navbar = {
  Wrapper: styled.nav`
  flex: 1;
  z-index: 99;
  align-self: flex-start;
  padding: 3rem 3rem; 
  margin-top: 30px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`,
  Items: styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 0;
    
    height: 100%;
    width: 100%;
    

    flex-direction: column;

    background-color: white;
    padding: 8rem 8rem;

    transition: 0.2s ease-out;

    transform: ${({ drawerIsOpen }) =>
      drawerIsOpen ? `translateY(0)` : `translateY(-100%)`};
  }
`,
  Item: styled.li`
  padding: 0 1rem;
  cursor: pointer;

  >:link {
      text-decoration: none;
      color: #000;
    }  
  
  >:visited {
      text-decoration: none;
      color: #000;
    }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
    text-align: center;
  }
`,
  CloseBtn: styled.button`
    @media only screen and (min-width: 768px) {
      display: none;
    }

    background-color: transparent;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 100;
  `
};
const NameWebsiteBtn = styled.h1`
font-weight: 700;

> :link {
  text-decoration: none;
  color: #000;
}

> :visited {
  text-decoration: none;
  color: #000;
}
`
const HamburgerButton = {
  Wrapper: styled.button`
  height: 3rem;
  width: 3rem;
  position: relative;
  font-size: 12px;

  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }

  /* Remove default button styles */
  border: none;
  background: transparent;
  outline: none;

  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }
`,
  Lines: styled.div`
  top: 25%;
  margin-top: -0.125em;

  &,
  &:after,
  &:before {
    /* Create lines */
    height: 2px;
    pointer-events: none;
    display: block;
    content: "";
    width: 100%;
    background-color: black;
    position: absolute;
  }

  &:after {
    /* Move bottom line below center line */
    top: -0.8rem;
  }

  &:before {
    /* Move top line on top of center line */
    top: 0.8rem;
  }
`
};


function Header({ siteTitle }) {
  const [drawerIsOpen, toggleDrawer] = useState(false);

  const links = [
    {
      label: "About",
      path: "/#about"
    },
    {
      label: "Projects",
      path: "/#projects"
    },
    {
      label: "Work experience",
      path: "/#work-experience"
    },
    {
      label: "Contact",
      path: "/#contact"
    },
  ]

  return (
    <Navbar.Wrapper>
      <NameWebsiteBtn>
        <Link to="/">
          {siteTitle}
        </Link>
      </NameWebsiteBtn>
      <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      {
        drawerIsOpen ?
          <Navbar.CloseBtn onClick={() => toggleDrawer(false)}>
            X
        </Navbar.CloseBtn> :
          null
      }

      <Navbar.Items drawerIsOpen={drawerIsOpen}>
        {
          links.map(({ label, path }) => (
            <Navbar.Item key={label} onClick={() => toggleDrawer(false)}>
              <Link to={path}>
                {label}
              </Link>
            </Navbar.Item>
          ))
        }
      </Navbar.Items>
    </Navbar.Wrapper>
  );
}

export default Header;