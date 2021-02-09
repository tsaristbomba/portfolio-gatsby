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
  MarkdownText,
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
      image: allFile(
        filter: {
          name: { regex: "/(profile-picture)/" }
          ext: { regex: "/(jpg)/" }
        }
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

      markdown: allFile(filter: { name: { regex: "/(profile-text)/" } }) {
        edges {
          node {
            childrenMarkdownRemark {
              html
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
              fluid={data.image.edges[0].node.childImageSharp.fluid}
              loading="eager"
              alt={alt}
            />
          </ProfilePicture>
          <ProfileText data-aos="fade-up">
            <MarkdownText
              dangerouslySetInnerHTML={{
                __html:
                  data.markdown.edges[0].node.childrenMarkdownRemark[0].html,
              }}
            />
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
