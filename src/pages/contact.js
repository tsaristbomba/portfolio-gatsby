import React from "react"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import { contactObj } from "../data/contact"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Contact {...contactObj} />
    </Layout>
  )
}

export default ContactPage
