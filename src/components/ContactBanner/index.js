import React from "react"
import { MdEmail } from "react-icons/md"
import { FaTwitter } from "react-icons/fa"

import {
  BannerContainer,
  BannerWrapper,
  Column1,
  Column2,
  BannerTitle,
  // BannerSub,
  SocialLink,
} from "./ContactBanner.styles"

const ContactBanner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <Column1>
          <BannerTitle>Need a JavaScript developer?</BannerTitle>
          {/* <BannerSub to="/contact">Get In Touch</BannerSub> */}
        </Column1>
        <Column2>
          <p>Get in touch:</p>
          <SocialLink href="mailto:andreitelfer@gmail.com" aria-label="Email">
            <MdEmail />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/andreitelfer"
            target="_blank"
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialLink>
        </Column2>
      </BannerWrapper>
    </BannerContainer>
  )
}

export default ContactBanner
