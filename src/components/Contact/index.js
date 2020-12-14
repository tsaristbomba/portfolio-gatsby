import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import {
  ContactContainer,
  ContactWrapper,
  ContactContent,
  Title,
  ContactH2,
  ContactText,
  ContactP,
  ContactSocials,
  SocialsLink,
  TwitterIcon,
  EmailIcon,
  SocialsText,
  ImageWrapper,
  ContactImage,
  ContactRow,
} from "./Contact.styles"

const Contact = ({ text }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { regex: "/(contact)/" }, ext: { regex: "/(jpg)/" } }
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
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactContent>
          <Title>
            <ContactH2>Contact.</ContactH2>
          </Title>
          <ContactRow>
            <ImageWrapper data-aos="fade-right">
              <ContactImage
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
                alt="Contact me"
              />
            </ImageWrapper>
            <ContactText data-aos="fade-up">
              {text.map((data, key) => {
                return <ContactP key={key}>{data}</ContactP>
              })}
              <ContactSocials>
                <SocialsLink
                  href="https://twitter.com/andreitelfer"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <SocialsText>
                    DM me <TwitterIcon />
                  </SocialsText>
                </SocialsLink>
                <SocialsLink
                  href="mailto:andreitelfer@gmail.com"
                  aria-label="Email"
                >
                  <SocialsText>
                    Email me <EmailIcon />
                  </SocialsText>
                </SocialsLink>
              </ContactSocials>
            </ContactText>
          </ContactRow>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  )
}

Contact.propTypes = {
  text: PropTypes.array,
}

export default Contact
