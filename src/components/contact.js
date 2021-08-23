import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Nav = styled.div`
    margin-top: 2rem;
`
const Cards = styled.div`
    display: flex;
    flex-flow: row wrap;
`
const Card = styled.button`
    margin: auto;
    padding: .5rem 1rem;
    background: #E4E4E4;
    border-radius: .75rem;
    border-color: transparent;
    width: 180px;

    > :link, > :visited {
        text-decoration: none;
        color: #000;
      }
      
      @media only screen and (max-width: 768px) {
        margin-top: 1rem;
    }
`

function Contact() {
    const links = [
        {
            label: "Email",
            path: "tom.chalancon@gmail.com"
        },
        {
            label: "Linkedin",
            path: "..."
        },
        {
            label: "Instagram",
            path: "https://www.instagram.com/tomchalancon/",
        },
        {
            label: "Phone",
            path: "..."
        },
    ]

    return (
        <Nav>
            <Cards>
                {links.map(({ label, path }) => (
                    <Card key={label}>
                        <Link
                            to={path}
                            target="_blank">
                            {label}
                        </Link>
                    </Card>
                ))
                }
            </Cards>
        </Nav>
    );
}

export default Contact