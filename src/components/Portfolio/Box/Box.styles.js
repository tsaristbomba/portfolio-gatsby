import styled from "styled-components"
import { primary, secondary, tertiary } from "../../../data/colors"
import Img from "gatsby-image"

export const PortfolioBox = styled.div`
  background: ${secondary};
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin: 1rem 0;
  justify-content: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`
export const BoxText = styled.div`
  color: ${primary};
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 48px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 24px;
    align-items: center;
  }
`
export const BoxH2 = styled.h2`
  font-size: 22px;
`
export const BoxStack = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`
export const BoxP = styled.p`
  background: ${primary};
  color: ${secondary};
  margin-right: 8px;
  padding: 6px;
  border-radius: 8px;

  @media screen and (max-width: 330px) {
    font-size: 12px;
    padding: 1px 4px;
  }
`
export const BoxIcons = styled.div``
export const BoxIcon = styled.a`
  color: ${primary};
  margin-right: 2rem;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`
export const BoxImage = styled.div`
  width: 60%;
  margin: 1rem 0 1rem 0;
  background: ${secondary};

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }
`
export const Image = styled(Img)`
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 768px) {
    box-shadow: none;
    /* border-radius: 0 0 8px 8px;OK816795265BR
 */
  }
`
export const ImagePlaceholder = styled.div`
  width: 100%;
  background: ${tertiary};
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 768px) {
    box-shadow: none;
    border-radius: 0 0 8px 8px;
  }
`
