import React from "react"

import { graphql } from "gatsby"
import Post from "../components/Post"

const BlogPost = ({ data }) => {
  //   const { blog } = data

  return (
    <>
      <Post {...data} />
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      author
      createdAt
      updatedAt
      tags
      related {
        slug
        title
        publishDate
      }
      childContentfulBlogPostDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulBlogPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
