import styled, { css } from  'styled-components';
import { Link } from 'react-router-dom';

const sharedStyles = css`
  padding: 10px 5px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  transition-duration: 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.focus};
  }
`;

export const A = styled.a`
  ${sharedStyles}
`;

export const RouterLink = styled(Link)`
  ${sharedStyles}
`;