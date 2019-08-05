import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

export default ({data}) => (

  <Layout>
      <StyledHero home="true" img={data.defaultBg.childImageSharp.fluid}>
        <Banner title="Brix Angeles" info="A web developer from Los Angeles. A Student, self-taught, and Grow with Google Front End Scholar.">
        <AniLink fade to="/About" className="btn-white">
              Technologies
            </AniLink>
            <AniLink fade to="/projects" className="btn-white">
              Projects
            </AniLink>
            <AniLink fade to="/About" className="btn-white">
              Contact
            </AniLink>
        </Banner>
      </StyledHero>
  </Layout>
)

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
