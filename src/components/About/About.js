import React from 'react';
import Wrapper from '../Wrapper';

import {
  StyledSection,
  StyledH3,
  StyledText,
  StyledLink,
  Span,
} from './About.style';

const About = () => (
  <StyledSection>
    <Wrapper>
      <StyledH3>About</StyledH3>
      <StyledText>
        This small application was created by for
        <StyledLink href="https://bimm.com/">
          [
          <Span>+</Span>
          BIMM
        </StyledLink>
        by
        <StyledLink href="http://alexdodd.ca/">
          Alex Dodd
          <Span>+</Span>
          ]
        </StyledLink>
        .
      </StyledText>
      <StyledText>
        I hope you have enjoyed this app, and I look forward to hearing from you soon!
      </StyledText>
    </Wrapper>
  </StyledSection>
);

export default About;
