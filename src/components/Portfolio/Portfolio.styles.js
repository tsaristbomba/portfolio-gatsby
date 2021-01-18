import styled from "styled-components"
import { primary, secondary } from "../../data/colors"

export const PortfolioContainer = styled.div`
  background: ${primary};
  display: flex;
  justify-content: center;
`
export const PortfolioWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
`
export const PortfolioTitle = styled.div`
  color: ${secondary};
`
export const Title = styled.h3`
  text-align: start;
  font-size: 18px;
  display: flex;
  align-items: center;
`
