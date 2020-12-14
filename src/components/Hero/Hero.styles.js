import styled from "styled-components"
import { primary, secondary, tertiary } from "../../data/colors"
import { Link } from "gatsby"

export const HeroContainer = styled.div`
  height: 90vh;
  background: ${primary};
`
export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -80px;
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
export const HeroP = styled.p`
  color: #fff;
  text-align: center;
  margin: 0.5rem 0;
`
export const HeroH1 = styled.h1`
  color: ${secondary};
  max-width: 550px;
  text-align: center;
  overflow: hidden;
  margin: 0.5rem 0;
`

export const HeroH2 = styled.h2`
  color: ${primary};
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
  background: ${secondary};
  padding: 12px 1rem;
  border-radius: 8px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 8px 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 315px) {
    font-size: 16px;
  }
`
export const Button = styled(Link)`
  color: ${secondary};
  padding: 12px;
  width: 10rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  background: transparent;
  transition: all 0.2s ease;
  border-radius: 8px;
  border: 1px solid ${secondary};
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.5rem 0;

  &:hover {
    /* background: ${secondary}; */
    /* color: ${primary}; */
    color: ${tertiary};
    border: 1px solid ${tertiary};
  }
`
