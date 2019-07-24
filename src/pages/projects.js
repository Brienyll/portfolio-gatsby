import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const projects = ({data}) => {
  return (
    <>
      <Layout>
        <StyledHero img={data.defaultBg.childImageSharp.fluid}/>
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
