import React, { Component } from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import About from "../components/Skills/About"

export default class about extends Component {
  render() {
    return (
      <>
      <Layout>
        <About />
      </Layout>
      </>
    )
  }
}

export const query = graphql`
query {
  defaultBg: file(relativePath: {eq: "bgAbout.jpg"}) {
    childImageSharp {
      fluid (quality: 90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
} 
`