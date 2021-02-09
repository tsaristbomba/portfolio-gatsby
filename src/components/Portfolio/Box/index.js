import React from "react"
import PropTypes from "prop-types"
import { FaGithub, FaLink } from "react-icons/fa"
import {
  PortfolioBox,
  BoxText,
  BoxH2,
  BoxP,
  BoxStack,
  BoxPill,
  BoxIcons,
  BoxIcon,
  BoxImage,
  Image,
} from "./Box.styles"

const Box = ({ imgSrc, title, stack, githubLink, link, description }) => {
  return (
    <>
      <PortfolioBox data-aos="fade-up">
        <BoxText>
          <BoxH2>{title}</BoxH2>
          <BoxP>{description}</BoxP>
          <BoxStack>
            {stack.map((data, key) => {
              return <BoxPill key={key}>{data}</BoxPill>
            })}
          </BoxStack>
          <BoxIcons>
            {githubLink ? (
              <BoxIcon
                href={githubLink}
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </BoxIcon>
            ) : (
              ""
            )}
            {link ? (
              <BoxIcon
                href={link}
                target="_blank"
                aria-label="App Link"
                rel="noopener noreferrer"
              >
                <FaLink />
              </BoxIcon>
            ) : (
              ""
            )}
          </BoxIcons>
        </BoxText>

        <BoxImage>
          <Image
            loading="eager"
            fluid={imgSrc.childImageSharp.fluid}
            alt={title}
          />
        </BoxImage>
      </PortfolioBox>
    </>
  )
}

Box.propTypes = {
  imgSrc: PropTypes.object,
  title: PropTypes.string,
  stack: PropTypes.array,
  githubLink: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
}

export default Box
