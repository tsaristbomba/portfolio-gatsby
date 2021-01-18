import React from "react"

import Hero from "../components/Hero"
import SEO from "../components/seo"
import { profileObj } from "../data/profile"
import GlobalStyles from "../styles/GlobalStyles"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <SEO title="Home" />
    <Hero {...profileObj} />
  </>
)

export default IndexPage
