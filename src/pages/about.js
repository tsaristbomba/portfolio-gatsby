import React from "react"
import Layout from "../components/layout"
import Profile from "../components/Profile"
import { profileObj } from "../data/profile"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Profile {...profileObj} />
    </Layout>
  )
}

export default AboutPage
