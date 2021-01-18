import styled from "styled-components"
import { quaternary, quinary } from "../../data/colors"

export const ConsentContainer = styled.div`
  display: ${({ $pop }) => ($pop ? "none" : "block")};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background-color: #fff;
  opacity: 1;
  /* text-align: center; */
  text-shadow: none;
  z-index: 3;

  div {
    max-width: 700px;
    margin: 0 auto;
  }

  a {
    text-shadow: none;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${quaternary};
    text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
    border-bottom: 2px solid ${quaternary};
    cursor: pointer;
    margin-left: 6px;
    text-align: center;
    font-weight: bold;
  }
`
