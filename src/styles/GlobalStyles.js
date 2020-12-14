import styled, { createGlobalStyle, keyframes } from "styled-components"
import { ImSpinner2 } from "react-icons/im"
import { tertiary } from "../data/colors"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", "Nunito", sans-serif;
        line-height: 1.5rem;
    }

    p, button, a {
        font-family: "Nunito", "Inter", sans-serif
    }
`

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
    
`

export const Spinner = styled(ImSpinner2)`
  position: absolute;
  top: 45%;
  left: 45%;
  color: ${tertiary};
  font-size: 2rem;
  animation: ${spin} 2s linear infinite;
`

export default GlobalStyles
