import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: 400px;
    background-color: red;
    padding: 10px;
    background-color: green;
`

const Card = styled.div`
    border-radius: 10px;
    background-color: blue;
`

const ImageContainer = styled.div`   
    background-color: red;
`

const TextContainer = styled.div`
    border-radius: 0px 0px 10px 10px;
    padding: 20px;
    background-color: #F4F4F4;
`

const ProjectCard = ({ project }) => {
    const { title, subtitle, image, path } = project
    return (
        <Container>
            <Card>
                <ImageContainer>
                    <StaticImage
                        src= "../images/coucou.jpg"
                        alt="Francois"
                        placeholder="blurred"
                        height={200}
                        width={400}
                    />
                </ImageContainer>
                <TextContainer>
                    <h3> {title} </h3>
                    <span> {subtitle} </span>
                </TextContainer>
            </Card>
        </Container>
    )
}

export default ProjectCard