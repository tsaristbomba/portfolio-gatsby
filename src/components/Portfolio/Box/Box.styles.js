import styled from "styled-components"
import { quaternary, secondary, tertiary } from "../../../data/colors"
import Img from "gatsby-image"

export const PortfolioBox = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  justify-content: center;
  width: 100%;
  margin: 1rem 0;

  display: grid;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col1 col2";
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    height: auto;

    grid-template-areas: "col2" "col1";
    grid-gap: 0.2rem;
    margin: 2rem 0;
    border-bottom: 1px solid ${tertiary};

    :last-child {
      border-bottom: none;
    }
  }
`
export const BoxText = styled.div`
  grid-area: col1;
  color: ${secondary};
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  /* padding-right: 48px; */
  justify-content: center;

  @media screen and (max-width: 880px) {
    padding: 24px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const BoxH2 = styled.h2`
  font-size: 22px;
`
export const BoxP = styled.p`
  font-size: 16px;
  margin-top: 1rem;
`
export const BoxStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem 0;
`
export const BoxPill = styled.p`
  background: ${quaternary};
  margin-right: 8px;
  margin-top: 8px;
  padding: 4px 6px;
  border-radius: 8px;
  box-shadow: rgba(255, 24, 76, 0.4) 0px 3px 18px;

  @media screen and (max-width: 330px) {
    font-size: 12px;
    padding: 1px 4px;
  }
`
export const BoxIcons = styled.div``
export const BoxIcon = styled.a`
  color: ${quaternary};
  margin-right: 2rem;
  font-size: 2rem;
  filter: drop-shadow(0px 4px 8px rgba(255, 24, 76, 0.5));
  border-bottom: none;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`
export const BoxImage = styled.div`
  grid-area: col2;

  /* width: 50%; */
  margin: 1rem 0 1rem 0;

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
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    box-shadow: none;
 */
  }
`
