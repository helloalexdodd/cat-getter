import styled, { css } from 'styled-components';
import Section from '../Section';
import { H3 } from '../Typography';
import Link from '../Link';
import { Text } from '../Typography';

const sharedStyles = css`
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledSection = styled(Section)`
  padding: 30px;
`;

export const StyledH3 = styled(H3)`
  margin-bottom: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin-bottom: 50px;
  }
`;

export const StyledText = styled(Text)`
  ${sharedStyles};
`;

export const StyledLink = styled(Link)`
  ${sharedStyles};
  text-transform: uppercase;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
