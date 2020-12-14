import React from "react"
import Box from "./Box"
import { graphql, useStaticQuery } from "gatsby"
import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioTitle,
  Title,
} from "./Portfolio.styles"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            title
            githubLink
            stack
            link
            imgSrc {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PortfolioContainer>
      <PortfolioWrapper id="work">
        <PortfolioTitle>
          <Title>Selected Work.</Title>
        </PortfolioTitle>
        {data.allPortfolioJson.edges.map((item, key) => {
          return <Box {...item.node} key={key} />
        })}
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
