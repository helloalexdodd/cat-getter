import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
