import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaBars } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  Socials,
  SocialLink,
  HeroMenu,
  HeroItem,
  HeroLink,
  MobileIcon,
  ImageContainer,
  Image,
} from "./Hero.styles"
import Sidebar from "../Sidebar"
import { quaternary } from "../../data/colors"

const Hero = ({ socials }) => {
  const [isOpen, setIsOpen] = useState(false)

  // initiate animate on scroll
  useEffect(() => {
    AOS.init({ duration: 600 })
  })
  //

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  const data = useStaticQuery(graphql`
    query {
      image: allFile(
        filter: { name: { regex: "/(home-pic)/" }, ext: { regex: "/(jpg)/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }

      text: allDataJson {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)

  return (
    <HeroContainer id="home">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito&display=swap');
      </style>
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <MobileIcon onClick={handleMenu}>
        <FaBars />
      </MobileIcon>
      <HeroWrapper>
        <HeroContent data-aos="fade-up">
          <ImageContainer>
            <Image
              fluid={data.image.edges[0].node.childImageSharp.fluid}
              loading="eager"
              fadeIn={false}
              alt="Profile pic"
            />
          </ImageContainer>
          <HeroH1>{data.text.edges[0].node.name}</HeroH1>
          <HeroP>{data.text.edges[0].node.description}</HeroP>
          <Socials>
            {socials.map((data, key) => {
              return (
                <SocialLink
                  key={key}
                  href={data.href}
                  aria-label={data.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.icon}
                </SocialLink>
              )
            })}
          </Socials>
          <HeroMenu>
            <HeroItem>
              <HeroLink
                to="/work"
                activeStyle={{
                  color: quaternary,
                  textShadow: `${quaternary} 0px 8px 24px, ${quaternary} 0px 4px 14px`,
                }}
              >
                Work
              </HeroLink>
            </HeroItem>
            <HeroItem>
              <HeroLink
                to="/about"
                activeStyle={{
                  color: quaternary,
                  textShadow: `${quaternary} 0px 8px 24px, ${quaternary} 0px 4px 14px`,
                }}
              >
                About
              </HeroLink>
            </HeroItem>
            <HeroItem>
              <HeroLink
                to="/blog"
                activeStyle={{
                  color: quaternary,
                  textShadow: `${quaternary} 0px 8px 24px, ${quaternary} 0px 4px 14px`,
                }}
              >
                Blog
              </HeroLink>
            </HeroItem>
            <HeroItem>
              <HeroLink
                to="/playlists"
                activeStyle={{
                  color: quaternary,
                  textShadow: `${quaternary} 0px 8px 24px, ${quaternary} 0px 4px 14px`,
                }}
              >
                Playlists
              </HeroLink>
            </HeroItem>
          </HeroMenu>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  )
}

Hero.propTypes = {
  socials: PropTypes.array,
}

export default Hero
