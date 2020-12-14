import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Portfolio />
  </Layout>
)

export default IndexPage
