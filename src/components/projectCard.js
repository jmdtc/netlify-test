import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"


const Card = styled.div`
    width: 50%;
    border-radius: 1em;
    padding: 0.5em;
`

const ImageContainer = styled.div`   
    border-radius: 16px 16px 0px 0px;
    background-color: red;
`

const TextContainer = styled.div`
    border-radius: 0px 0px 16px 16px;
    padding: 0.5em;
    background-color: #E4E4E4;
`

const TitleCard = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 0.25em;
`
const SubtitleCard = styled.h4`
    font-family: 'Inter', sans-serif;
    font-size: 0.75em;
    font-weight: 400;
    margin-bottom: 0.25em;
    color: #73808D
`

const ProjectCard = ({ project }) => {
    const { title, subtitle, image, path } = project
    return (
        <Card>
            <ImageContainer>
                <StaticImage
                    src="../images/coucou.jpg"
                    alt="Francois"
                    placeholder="blurred"
                    height={250}
                    width={400}
                />
            </ImageContainer>
            <TextContainer>
                <TitleCard> {title} </TitleCard>
                <SubtitleCard> {subtitle} </SubtitleCard>
            </TextContainer>
        </Card>
    )
}

export default ProjectCard