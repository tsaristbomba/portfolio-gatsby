import { Link } from "gatsby"
import React from "react"
import { Dot } from "../../styles/GlobalStyles"
import ContactBanner from "../ContactBanner"
import Layout from "../layout"
import ScrollButton from "../ScrollButton"
import SEO from "../seo"
import {
  PostContainer,
  PostHero,
  PostWrapper,
  PostBack,
  Arrow,
  PostTitle,
  PostSub,
  PostAuthor,
  PostDate,
  PostBody,
  PostRelated,
} from "./Post.styles"

const Post = ({ blog }) => {
  function formatDate(rawDate) {
    const dateObj = new Date(rawDate)
    const month =
      dateObj.getUTCMonth() + 1 <= 9
        ? "0" + (dateObj.getUTCMonth() + 1)
        : dateObj.getUTCMonth() + 1
    const day =
      dateObj.getUTCDate() <= 9
        ? "0" + dateObj.getUTCDate()
        : dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const date = year + "-" + month + "-" + day

    return date
  }

  return (
    <Layout>
      <SEO title={blog.title} />
      <ScrollButton />
      <PostContainer>
        <PostHero
          loading="eager"
          fluid={blog.heroImage.fluid}
          alt={blog.title}
          fadeIn={false}
        />
        <PostWrapper>
          <PostBack to="/blog">
            <Arrow />
            Archive
            <div />
          </PostBack>
          <PostTitle>
            <Dot />
            {blog.title}
          </PostTitle>
          <PostSub>
            <PostAuthor to="/about">
              {blog.author}
              <div />
            </PostAuthor>
            <PostDate>
              {formatDate(blog.createdAt) === formatDate(blog.updatedAt)
                ? formatDate(blog.createdAt)
                : `Updated at ${formatDate(blog.updatedAt)}`}
              {blog.tags !== null ? (
                <span>Topics: {blog.tags.join(", ")}</span>
              ) : (
                <></>
              )}
            </PostDate>
          </PostSub>
          <PostBody
            dangerouslySetInnerHTML={{
              __html:
                blog.childContentfulBlogPostBodyTextNode.childMarkdownRemark
                  .html,
            }}
          />
          {blog.related !== null ? (
            <PostRelated>
              <h2>Related Posts</h2>
              <ul>
                {blog.related.map(post => (
                  <li>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    <span>{formatDate(post.publishDate)}</span>
                  </li>
                ))}
              </ul>
            </PostRelated>
          ) : (
            <></>
          )}
          <ContactBanner />
        </PostWrapper>
      </PostContainer>
    </Layout>
  )
}

export default Post
