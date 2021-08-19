import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
 
 
const Card = styled.div`
    width: 50%;
    border-radius: 16px;
    overflow: hidden;
    padding: 1rem;
 
    @media only screen and (max-width: 576px) {
        width: 100%
    }
`
 
const ImageContainer = styled.div`
`
 
const TextContainer = styled.div`
    border-radius: 0px 0px 16px 16px;
    padding: 0.5rem;
    background-color: #E4E4E4;
`
 
const TitleCard = styled.h1`
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
    const { title, subtitle, image, path } = project
    return (
        <Card>
            <ImageContainer>
                <StaticImage
                    src={"../images/coucou.jpg"}
                    alt="Francois"
                    layout="fullWidth"
                    aspectRatio={1 / 0.6}
                    style={{borderRadius: "16px 16px 0px 0px"}}
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
