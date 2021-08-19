import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`
const NameWebsiteBtn = styled.h1`
  font-weight: 700;
`
const RightSideContainer = styled.div`
  display: flex;

  > *:hover {

  }

  > :not(:last-of-type) {
    margin-right: 1rem;
  }
`

const links = [
  {
    label: "About",
    link: "/#about"
  },
  {
    label: "Projects",
    link: "/#projects"
  },
  {
    label: "Work experience",
    link: "/#work-experience"
  },
  {
    label: "Contact",
    link: "/#contact"
  },
]

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <NameWebsiteBtn>
      <Link to="/">
        {siteTitle}
      </Link>
    </NameWebsiteBtn>
    <RightSideContainer>
      {
        links.map(({ link, label }) => (
          <Link
            to={link}
            key={label}
            activeStyle={{ color: "green", backgroundColor: "purple" }}
          >
            {label}
          </Link>)
        )
      }
    </RightSideContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
