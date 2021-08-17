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
    link: "/about"
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
    <Link to="/">
      {siteTitle}
    </Link>
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
