import React from "react"
import Typewriter from "typewriter-effect"
import {
  ErrorContainer,
  ErrorWrapper,
  ErrorH1,
  ErrorP,
  Button,
} from "./Error.styles"

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorWrapper>
        <ErrorH1>
          <Typewriter
            options={{
              strings: ["404: Not found."],
              autoStart: true,
              pauseFor: 15000000,
              loop: true,
              delay: 40,
              deleteSpeed: 35,
            }}
          />
        </ErrorH1>
        <ErrorP>
          The page you're trying to visit <strong>does not exist</strong>
        </ErrorP>
        <Button to="/">Back to Home</Button>
      </ErrorWrapper>
    </ErrorContainer>
  )
}

export default Error
