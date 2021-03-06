import styled, { css } from 'styled-components';

const sharedStyles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  margin: 10px 0;
  text-shadow: ${({ theme }) => theme.shadows.text}
`;

export const StyledH1 = styled.h1`
  ${sharedStyles};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const StyledH2 = styled.h2`
  ${sharedStyles};
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const StyledH3 = styled.h3`
  ${sharedStyles};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledH4 = styled.h4`
  ${sharedStyles};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;

export const StyledH5 = styled.h5`
  ${sharedStyles};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
