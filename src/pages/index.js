import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"


const projects = [
  {
    title: "Test",
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

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Tom Chalancon</h1>
      <p>Welcome to my Designer Portfolio.</p>

      <h2>About</h2>
      <p>Coucou c'est moi et voici quelques infos sur mon travail.</p>

      <h2>Projects</h2>
      {
        projects.map(project => <ProjectCard project={project} key={project.title} />)
      }

      <div id="contact"></div>
    </Layout>
  )
}

export default IndexPage
