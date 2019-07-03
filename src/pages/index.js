import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="Brix Angeles" info="A web developer from Los Angeles. A Student, self-taught, and Grow with Google Front End Scholar.">
        <Link to="/about" className="btn-white">
          About Me
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
