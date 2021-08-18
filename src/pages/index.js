import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"


const projects = [
  {
    title: "Test",
    subtitle: "Zalando - 2018",
    image: "../images/coucou.jpg",
    path: "/projects/some-path"
  },
  {
    title: "Test2",
    subtitle: "Prout test",
    image: "../images/coucou.jpg",
    path: "/projects/some-path"
  },
  {
    title: "Test2",
    subtitle: "Prout test",
    image: "../images/coucou.jpg",
    path: "/projects/some-path"
  },
]

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 12px;
`
const Title = styled.h2`
    font-family: 'Lora', serif;
    font-size: 2em;
    font-weight: 700;
`

const About = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    margin-bottom: 16px;
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Tom Chalancon</h1>
      <p>Welcome to my Designer Portfolio.</p>

      <Title>About</Title>
      <About>I am a french Graphic Designer based in Berlin. Growing up in France{"\n"}</About>
      <About>right next to the Swiss border, I moved to Berlin three years ago in</About>
      <About>order to develop my creative skills. I have recently graduated from</About>
      <About>university with a Bachelor in Communication Design.</About>

      <Title>Projects</Title>
      <Container>
        {
          projects.map(project => <ProjectCard project={project} key={project.title} />)
        }
      </Container>



      <div id="contact"></div>

    </Layout>
  )
}

export default IndexPage
