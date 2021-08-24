import React from "react";
import styled from "styled-components";

const Copyright = styled.div`
margin-top: 4rem;
text-align: center;
`

function Footer({ }) {
    return (
        <Copyright>
            © 2021 Tom Chalancon. All rights reserved.
        </Copyright>
    );
}

export default Footer;