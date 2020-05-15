import styled from 'styled-components';

export const P = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
