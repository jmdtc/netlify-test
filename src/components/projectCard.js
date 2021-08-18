import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"


const Card = styled.div`
    border-radius: 12px;
    padding: 8px;
`

const ImageContainer = styled.div`   
    border-radius: 12px;
    background-color: red;
`

const TextContainer = styled.div`
    border-radius: 0px 0px 12px 12px;
    padding: 12px;
    background-color: #E4E4E4;
`

const TitleCard = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 4px;
`
const SubtitleCard = styled.h4`
    font-family: 'Inter', sans-serif;
    font-size: 0.75em;
    font-weight: 400;
    margin-bottom: 4px;
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
                    height={200}
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