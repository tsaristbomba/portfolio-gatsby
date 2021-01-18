import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileTitle,
  Title,
  ProfilePicture,
  Picture,
  ProfileText,
  ProfileP,
  ProfileAnchor,
  ProfileLink,
  ProfileSkills,
  ProfileSkillX,
  ProfileSkill,
  ProfileContent,
  SkillsTitle,
  Skills,
  Socials,
  SocialIcons,
  SocialLink,
} from "./Profile.styles"
import { Dot } from "../../styles/GlobalStyles"

const Profile = ({ alt, skillX, skill, socials, contact }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { regex: "/(profile)/" }, ext: { regex: "/(jpg)/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProfileContainer id="about">
      <ProfileWrapper>
        <ProfileTitle>
          <Title>
            <Dot />
            About
          </Title>
        </ProfileTitle>
        <ProfileContent>
          <ProfilePicture data-aos="fade-right">
            <Picture
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt={alt}
            />
          </ProfilePicture>
          <ProfileText data-aos="fade-up">
            <ProfileP>
              I was born and grew up in Brazil, in a small town at the exact
              center of{" "}
              <ProfileAnchor
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandeira_da_Bahia.svg/1920px-Bandeira_da_Bahia.svg.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                the great state of Bahia
              </ProfileAnchor>
              <span role="img" aria-label="">
                {" "}
                😁
              </span>
              . My experience with computers started when my parents, both high
              school teachers, needed a computer to work. They bought a white
              IBM Windows 98 PC, which I played games and learned a lot from,
              enjoyed every second of it. Knowing that I would end up working in
              tech wasn't a stretch{" "}
              <span role="img" aria-label="">
                😉
              </span>
              .
            </ProfileP>
            <ProfileP>
              As time passes I started to study Computer Engineering to after
              find out that coding itself is what suits me more, so I made the
              change to Computer Science. In the meantime I was learning Web
              Development and started making games and websites for fun, to
              later decide to do this professionally, and here I am{" "}
              <span role="img" aria-label="">
                🖐️
              </span>
              .
            </ProfileP>
            <ProfileP>
              My other big passions are Music, Crypto and Games. As described
              before, I started coding building games as well as websites, and
              to this day gaming is a big passion of mine. While doing anything
              I like to listen to a lot of music, and this are some of my
              favorite <ProfileLink to="/playlists#top">Playlists</ProfileLink>{" "}
              at the moment.
            </ProfileP>
            <ProfileSkills>
              <SkillsTitle>
                <Title>My Skills:</Title>
              </SkillsTitle>
              <Skills>
                {skillX.map((data, key) => {
                  return <ProfileSkillX key={key}>{data}</ProfileSkillX>
                })}
                {skill.map((data, key) => {
                  return <ProfileSkill key={key}>{data}</ProfileSkill>
                })}
              </Skills>
              <Socials>
                <SkillsTitle>
                  <Title>Contact:</Title>
                </SkillsTitle>
                <ProfileP>{contact}</ProfileP>
                <SocialIcons>
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
                </SocialIcons>
              </Socials>
            </ProfileSkills>
          </ProfileText>
        </ProfileContent>
      </ProfileWrapper>
    </ProfileContainer>
  )
}

Profile.propTypes = {
  alt: PropTypes.string,
  skillX: PropTypes.array,
  skill: PropTypes.array,
  socials: PropTypes.array,
  contact: PropTypes.string,
}

export default Profile
