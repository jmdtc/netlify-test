import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"
import WorkCard from "../components/workCard"


const projects = [
  {
    title: "Kompo",
    subtitle: "Zalando - 2018",
    image: "../images/coucou.jpg",
    path: "/projects/some-path"
  },
  {
    title: "Santu",
    subtitle: "Prout test",
    image: "../images/coucou.jpg",
    path: "/projects/some-path"
  },
  {
    title: "Cookoo",
    subtitle: "Prout test",
    image: "../images/coucou.jpg",
    path: "/projects/some-path"
  },
]

const works = [
  {
    title: "Le Drustore Modern",
    date: "May 2017 - June 2017",
    description: "Responsible for the redesign of the website and assets creation, product photography, event marketing, motion design"
  },
  {
    title: "Freelance",
    date: "2017 - 2018",
    description: "Creation and support of many kinds of projects such as logo creation, posters, communication campaigns, photography and event organisation"
  },
  {
    title: "Zalando",
    date: "2019 - 2021",
    description: "Responsible for print material throughout Europe with gift cards and flyers, social media design, digital design, campaign design, involvement in the redesign of the icon system"
  },
]

const Work = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em;
`
const Project = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 2em;
`
const Title = styled.h2`
    font-family: 'Lora', serif;
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 0.5em;
`
const About = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    margin-bottom: 2em;
`
const Resume = styled.div`
    margin: auto;
    font-family: 'Inter', sans-serif;
    text-align: center;
    background-color: white;
    width: 20%;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 0.75em;
    border: 1px solid #C4C4C4; 
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Title>About</Title>
      <About>I am a french Graphic Designer based in Berlin. Growing up in France
        right next to the Swiss border, I moved to Berlin three years ago in
        order to develop my creative skills. I have recently graduated from
        university with a Bachelor in Communication Design.</About>

      <Title>Projects</Title>
      <Project>
        {
          projects.map(project => <ProjectCard project={project} key={project.title} />)
        }
      </Project>

      <Title>Work experience</Title>
      <Work>
        {
          works.map(work => <WorkCard work={work} key={work.title} />)
        }
        <Resume>
          <a href="../images/Tom Chalancon_CV.pdf" download> Download CV</a>
        </Resume>
      </Work>


      <div id="contact"></div>

    </Layout>
  )
}

export default IndexPage
