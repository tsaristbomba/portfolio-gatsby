import styled from "styled-components"
import { primary, secondary, tertiary } from "../../data/colors"
import { MdEmail } from "react-icons/md"
import { FaTwitter } from "react-icons/fa"
import Img from "gatsby-image"

export const ContactContainer = styled.div`
  height: calc(100vh - 160px);
  background: ${primary};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`
export const ContactWrapper = styled.div`
  padding: 24px;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 48px;
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
  }
`
export const ContactContent = styled.div`
  color: ${secondary};
`
export const Title = styled.div`
  margin-bottom: 1rem;
`
export const ContactH2 = styled.h2`
  font-size: 18px;
`
export const ContactRow = styled.div`
  display: grid;
  min-height: 305px;
  grid-auto-columns: minmax(50%, 1fr);
  grid-template-areas: "col1 col2";
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`
export const ImageWrapper = styled.div`
  grid-area: col1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    min-height: 250px;
  }
`
export const ContactImage = styled(Img)`
  width: 100%;
  border-radius: 8px;
`
export const ContactText = styled.div`
  grid-area: col2;
  margin-bottom: 1rem;
`
export const ContactP = styled.p`
  line-height: 24px;
  margin-bottom: 1rem;
`
export const ContactSocials = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`
export const TwitterIcon = styled(FaTwitter)`
  font-size: 1.4rem;
  margin-left: 4px;
`
export const EmailIcon = styled(MdEmail)`
  font-size: 1.4rem;
  margin-left: 4px;
`
export const SocialsLink = styled.a`
  color: ${primary};
  margin-right: 1rem;
  padding: 12px;
  width: 12rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  background: ${secondary};
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  &:hover {
    background: ${tertiary};
    color: ${secondary};
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`
export const SocialsText = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-left: auto;
`
