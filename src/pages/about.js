import React, { Component } from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default class about extends Component {
  render() {
    return (
      <>
      <Layout>
        <StyledHero img={this.props.data.defaultBg.childImageSharp.fluid}/>
      </Layout>
      </>
    )
  }
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