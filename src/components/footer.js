import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react";
import styled from "styled-components";

const Copyright = styled.div`
margin-top: 4rem;
text-align: center;
`

function Footer({ siteTitle }) {
    return (
        <Copyright>
            © 2021 Tom Chalancon. All rights reserved.
        </Copyright>
    );
}

export default Footer;