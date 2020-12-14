import React from "react"

import Error from "../components/Error"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Error />
  </Layout>
)

export default NotFoundPage
