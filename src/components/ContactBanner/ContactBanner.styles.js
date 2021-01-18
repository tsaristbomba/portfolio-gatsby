import styled from "styled-components"
import { Link } from "gatsby"
import { quaternary, secondary, tertiary } from "../../data/colors"

export const BannerContainer = styled.div`
  background: transparent;
  color: ${secondary};
  padding: 4rem 0;
  margin: 4rem 0 0 0;
  border-top: 1px solid ${tertiary};
`
export const BannerWrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`
export const Column1 = styled.div`
  grid-area: col1;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const Column2 = styled.div`
  grid-area: col2;
  justify-self: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`
export const BannerTitle = styled.h1`
  font-weight: normal;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    line-height: 2rem;
    margin-bottom: 2rem;
  }
`
export const BannerSub = styled(Link)`
  color: ${quaternary};
  text-decoration: none;
  border-bottom: 2px solid ${quaternary};
  transition: all 0.2s ease;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`
export const SocialLink = styled.a`
  color: ${quaternary};
  margin: 0 1rem;
  font-size: 2rem;
  transition: 0.2s color ease;
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  border-bottom: none;
`
