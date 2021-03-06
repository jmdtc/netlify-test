import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"



const CardContainer = styled.div`
    padding: 1rem;
    width: 50%;

    @media only screen and (max-width: 576px) {
        width: 100%
    }
`

const Card = styled.div`
    border-radius: 16px;
    background-color: #E4E4E4;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);
        cursor: pointer;
    }
`

const ImageContainer = styled.div`
    background-color: #E4E4E4;
    border-radius: 16px;
`

const TextContainer = styled.div`
    padding: 0.5rem;
`

const TitleCard = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
`
const SubtitleCard = styled.h4`
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
    color: #73808D
`

const ProjectCard = ({ project }) => {
    const { title, company, year, thumbnail, slug } = project

    return (
        <CardContainer>
            <Link to={slug}>
                <Card>
                    <ImageContainer>
                        <GatsbyImage
                            image={getImage(thumbnail)}
                            alt={`${title} thumbnail`}
                            aspectRatio={1 / 0.6}
                            style={{ borderRadius: "16px" }}
                        />
                    </ImageContainer>
                    <TextContainer>
                        <TitleCard> {title} </TitleCard>
                        <SubtitleCard> {company} - {year} </SubtitleCard>
                    </TextContainer>
                </Card>
            </Link>
        </CardContainer>
    )
}

export default ProjectCard