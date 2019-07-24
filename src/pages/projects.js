import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const projects = () => {
  return (
    <>
      <Layout>
      projects
      </Layout>
    </>
  )
}

export const query = graphql`
query {
  defaultBg: file(relativePath: {eq: "bg.png"}) {
    childImageSharp {
      fluid (quality: 90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
} 
`

export default projects
