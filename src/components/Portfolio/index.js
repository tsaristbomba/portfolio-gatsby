import React from "react"
import Box from "./Box"
import { graphql, useStaticQuery } from "gatsby"
import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioTitle,
  Title,
} from "./Portfolio.styles"
import { Dot } from "../../styles/GlobalStyles"
import ScrollButton from "../ScrollButton"

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
            description
            imgSrc {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
      <ScrollButton />
      <PortfolioWrapper id="work">
        <PortfolioTitle>
          <Title>
            <Dot />
            Selected Work
          </Title>
        </PortfolioTitle>
        {data.allPortfolioJson.edges.map((item, key) => {
          return <Box {...item.node} key={key} />
        })}
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
