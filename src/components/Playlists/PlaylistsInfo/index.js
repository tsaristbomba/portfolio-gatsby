import React from "react"
import { FaSpotify } from "react-icons/fa"
import {
  PlaylistsInfoContainer,
  ImageWrapper,
  Image,
  TextWrapper,
  PlaylistH2,
  PlaylistP,
  PlaylistButton,
} from "./PlaylistsInfo.styles"

const PlaylistsInfo = ({ img, title, description, reverse, href }) => {
  return (
    <PlaylistsInfoContainer
      $reverse={reverse}
      //data-aos="fade-up"
    >
      <ImageWrapper data-aos={`fade-${reverse ? "left" : "right"}`}>
        <Image loading="lazy" fluid={img.childImageSharp.fluid} alt={title} />
      </ImageWrapper>
      <TextWrapper $reverse={reverse} data-aos="fade-up">
        <PlaylistH2>{title}</PlaylistH2>
        <PlaylistP>{description}</PlaylistP>
        <PlaylistButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <FaSpotify />
        </PlaylistButton>
      </TextWrapper>
    </PlaylistsInfoContainer>
  )
}

export default PlaylistsInfo
