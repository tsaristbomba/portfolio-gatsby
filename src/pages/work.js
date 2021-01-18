import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/Portfolio"
import SEO from "../components/seo"

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <Portfolio />
    </Layout>
  )
}

export default WorkPage
