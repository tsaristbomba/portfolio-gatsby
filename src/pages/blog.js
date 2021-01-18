import React from "react"
import BlogArchive from "../components/BlogArchive"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogArchive />
    </Layout>
  )
}

export default BlogPage
