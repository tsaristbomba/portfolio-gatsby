import React from "react"

import Error from "../components/Error"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyles from "../styles/GlobalStyles"

const NotFoundPage = () => (
  <>
    <GlobalStyles />
    <SEO title="404: Not found" />
    <Error />
  </>
)

export default NotFoundPage
