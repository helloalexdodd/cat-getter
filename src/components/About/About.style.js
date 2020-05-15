import styled, { css } from 'styled-components';
import Section from '../Section';
import Link from '../Link';
import { Text } from '../Typography';

const sharedStyles = css`
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledSection = styled(Section)`
  padding: 30px;
`;

export const StyledText = styled(Text)`
  ${sharedStyles};
`;

export const StyledLink = styled(Link)`
  ${sharedStyles};
  text-transform: uppercase;
  letter-spacing: -0.5px;
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
