import styled from 'styled-components';

export const ButtonElement = styled.button`
  background: none;
  margin: 5px;
  padding: 5px 10px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.tertiary};
  border: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.tertiary}`};
  border-radius: ${({ theme }) => theme.radii.button};
  transition-duration: 0.3s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.focus};
    border: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.focus}`};
  }
`;
