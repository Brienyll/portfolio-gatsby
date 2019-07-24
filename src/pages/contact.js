import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default function contact() {
  return (
    <>
      <Layout>
        contact
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