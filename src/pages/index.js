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
   image: "../images/gatsby-astronaut.png",
   path: "/projects/some-path"
 }   
]

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>


      {
        projects.map(project => <ProjectCard project={project} key={project.title}/>)
      }
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div id="contact"></div>
    </Layout>
  )
}

export default IndexPage
