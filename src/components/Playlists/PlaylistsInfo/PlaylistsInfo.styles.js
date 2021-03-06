import styled from "styled-components"
import { quaternary, secondary, tertiary } from "../../../data/colors"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

export const PlaylistsInfoContainer = styled.div`
  display: grid;
  max-width: 1100px;
  width: 100%;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: ${({ $reverse }) =>
    $reverse ? "'col2 col1'" : "'col1 col2'"};
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    margin: 1.5rem 0;
    grid-gap: 0.2rem;
  }
`
export const ImageWrapper = styled.div`
  grid-area: col1;
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`
export const Image = styled(GatsbyImage)`
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`
export const TextWrapper = styled.div`
  grid-area: col2;
  text-align: ${({ $reverse }) => ($reverse ? "end" : "start")};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const PlaylistH2 = styled.h2`
  font-size: 22px;
  color: ${secondary};
`
export const PlaylistP = styled.p`
  color: ${tertiary};
  margin-bottom: 8px;
`
export const PlaylistButton = styled.a`
  color: ${quaternary};
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.6));
  border-bottom: none;
`
