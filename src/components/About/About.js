import React from 'react';
import Wrapper from '../Wrapper';
import { H3 } from '../Typography';

import {
  StyledSection, StyledText, StyledLink, Span,
} from './About.style';

const About = () => (
  <StyledSection>
    <Wrapper>
      <H3>About</H3>
      <StyledText>
        This small application was created by for <StyledLink href='https://bimm.com/'>[ <Span>+</Span> BIMM</StyledLink> by <StyledLink href='http://alexdodd.ca/'>Alex Dodd <Span>+</Span> ]</StyledLink>.
      </StyledText>
      <StyledText>
        I hope you have enjoyed this app, and I look forward to hearing from you soon!
      </StyledText>
    </Wrapper>
  </StyledSection>
);
export default About;
