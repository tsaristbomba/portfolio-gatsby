import React from "react"
import Typewriter from "typewriter-effect"
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  HeroH2,
  Button,
} from "./Hero.styles"

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <HeroContent data-aos="fade-up">
          <HeroP>Hi, my name is</HeroP>
          <HeroH1>Andrei</HeroH1>
          <HeroH2>
            <Typewriter
              options={{
                strings: ["React.js Developer."],
                autoStart: true,
                pauseFor: 15000000,
                loop: true,
                delay: 50,
                deleteSpeed: 35,
              }}
            />
          </HeroH2>
          <Button to="/contact#">Contact me</Button>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero
