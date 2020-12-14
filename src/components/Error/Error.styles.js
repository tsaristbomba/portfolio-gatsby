import styled from "styled-components"
import { Link } from "gatsby"
import { primary, secondary, tertiary } from "../../data/colors"

export const ErrorContainer = styled.div`
  height: calc(100vh - 160px);
  background: ${primary};
`
export const ErrorWrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ErrorH1 = styled.h1`
  color: ${primary};
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
  background: ${secondary};
  padding: 12px 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`
export const ErrorP = styled.p`
  color: ${secondary};
  margin: 1rem 0;
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
