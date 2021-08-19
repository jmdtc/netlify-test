import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
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
    const { title, subtitle, image, path } = project
    return (
        <CardContainer>
            <Card>
                <ImageContainer>
                    <StaticImage
                        src={"../images/coucou.jpg"}
                        alt="Francois"
                        layout="fullWidth"
                        aspectRatio={1 / 0.6}
                        style={{ borderRadius: "16px" }}
                    />
                </ImageContainer>
                <TextContainer>
                    <TitleCard> {title} </TitleCard>
                    <SubtitleCard> {subtitle} </SubtitleCard>
                </TextContainer>
            </Card>
        </CardContainer>
    )
}

export default ProjectCard