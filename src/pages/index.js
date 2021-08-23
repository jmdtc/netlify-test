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

const WorkCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`
const ProjectCardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin-bottom: 2rem;
`
const SectionTitle = styled.h2`
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }
`
const AboutParagraph = styled.p`
    line-height: 2.4;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 8rem;

    @media only screen and (max-width: 768px) {
      margin-right: 2rem;
  }
  }
`
const ResumeBtn = styled.button`
    margin: auto;
    text-align: center;
    background-color: #E4E4E4;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 0.75rem;
    border: 1px solid #E4E4E4; 

    > :link, > :visited {
      text-decoration: none;
      color: #000;
    }

   > :hover {
     background-color:black
      color: white;
    }
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <div id="about"></div>
      <SectionTitle>About</SectionTitle>
      <AboutParagraph>
        I am a french Graphic Designer based in Berlin. Growing up in France
        right next to the Swiss border, I moved to Berlin three years ago in
        order to develop my creative skills. I have recently graduated from
        university with a Bachelor in Communication Design.
      </AboutParagraph>

      <div id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectCardsContainer>
          {
            projects.map(project => <ProjectCard project={project} key={project.title} />)
          }
        </ProjectCardsContainer>
      </div>

      <div id="work-experience">
        <SectionTitle>Work experience</SectionTitle>
        <WorkCardsContainer>
          {
            works.map(work => <WorkCard work={work} key={work.title} />)
          }
          <ResumeBtn>
            <a href="../images/Tom Chalancon_CV.pdf" download> Download CV</a>
          </ResumeBtn>
        </WorkCardsContainer>
      </div>

      <div id="contact"></div>

    </Layout>
  )
}

export default IndexPage
