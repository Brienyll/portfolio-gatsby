import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Projects from "../components/Projects/Projects"

const projects = ({data}) => {
  return (
    <>
      <Layout>
        <Projects />
      </Layout>
      
    </>
  )
}

export const query = graphql`
query {
  defaultBg: file(relativePath: {eq: "bgProjects.jpg"}) {
    childImageSharp {
      fluid (quality: 90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
} 
`

export default projects
