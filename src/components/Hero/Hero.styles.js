import styled from "styled-components"
import {
  primary,
  quaternary,
  quinary,
  secondary,
  tertiary,
} from "../../data/colors"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const HeroContainer = styled.div`
  height: 100vh;
  background: ${primary};
`
export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -80px;
  /* max-width: 600px; */
  margin: 0 auto;
`
export const HeroContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 48px;
  overflow: hidden;
  letter-spacing: 0.15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 24px;
  }
`
export const ImageContainer = styled.div`
  /* width: 200px; */
  margin: 0 auto;
  width: 208px;
  height: 208px;
  border-radius: 50%;
  border: 4px solid ${quaternary};
  box-shadow: 0px 4px 8px rgba(255, 24, 76, 0.6);
`
export const Image = styled(Img)`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: grayscale(100%);
`
export const HeroP = styled.p`
  color: #fff;
  text-align: center;
  margin: 0.5rem 0;
`
export const HeroH1 = styled.h1`
  color: ${secondary};
  text-align: center;
  /* margin: 0.5rem auto; */
  padding: 12px 1rem;
  border-radius: 8px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 64px;
  margin-bottom: -8px;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
    line-height: 48px;
  }
  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`
export const Button = styled(Link)`
  color: ${secondary};
  padding: 5px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  background: transparent;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.5rem 0;
  border-bottom: 2px solid ${secondary};

  &:hover {
    color: ${tertiary};
    border-bottom: 2px solid ${tertiary};
  }
`
export const Socials = styled.div`
  display: flex;
  margin: 0 auto 1rem auto;
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`
export const SocialLink = styled.a`
  color: ${quaternary};
  font-size: 2rem;
  margin-right: 1rem;
  transition: all 0.2s ease;
  border-bottom: none;
`
export const HeroMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeroItem = styled.li`
  height: 80px;
`

export const HeroLink = styled(Link)`
  color: ${secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;
  transition: 0.2s ease;
  text-shadow: none;
  font-weight: bold;

  &:hover {
    color: ${quaternary};
    text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${quaternary};
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
  }
`
