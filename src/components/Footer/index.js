import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterRights,
  FooterMaker,
  CodeIcon,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRights>ⓒ {new Date().getFullYear()} Andrei Telfer</FooterRights>
        <FooterMaker>
          <CodeIcon /> with React.js
        </FooterMaker>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
