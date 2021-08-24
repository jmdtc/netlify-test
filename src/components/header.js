import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { useState } from "react";
import styled from "styled-components";

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    z-index: 99;
    align-self: flex-start;
    padding: 0rem 2rem; 
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px; 

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    margin: 0;

    @media only screen and (max-width: 768px) {
      position: fixed;
      right: 0;
      top: 0;
      
      height: 100%;
      width: 100%;
      

      flex-direction: column;

      padding: 6rem 8rem;
      background-color: white;

      transition: 0.2s ease-out;

      transform: ${({ drawerIsOpen }) =>
        drawerIsOpen ? `translateY(0)` : `translateY(-100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
    margin: 0;

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

    font-size: 3rem;
    line-height: 1;
    padding: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
  `
};
const NameWebsiteBtn = styled.h1`
  font-weight: 700;
  margin: 0;

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
    width: 2rem;
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
        <AnchorLink to="/">
          {siteTitle}
        </AnchorLink>
      </NameWebsiteBtn>
      <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      {
        drawerIsOpen ?
          <Navbar.CloseBtn onClick={() => toggleDrawer(false)}>
            ×
          </Navbar.CloseBtn> :
          null
      }

      <Navbar.Items drawerIsOpen={drawerIsOpen}>
        {
          links.map(({ label, path }) => (
            <Navbar.Item key={label} onClick={() => toggleDrawer(false)}>
              <AnchorLink to={path}>
                {label}
              </AnchorLink>
            </Navbar.Item>
          ))
        }
      </Navbar.Items>
    </Navbar.Wrapper>
  );
}

export default Header;