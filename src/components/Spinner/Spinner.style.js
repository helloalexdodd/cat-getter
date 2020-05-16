import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 20px;
  animation: ${spin} 2s infinite linear;
`;
