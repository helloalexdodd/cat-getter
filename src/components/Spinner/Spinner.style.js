import styled from 'styled-components';
import { spin } from '../../animations';

export const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 20px;
  animation: ${spin} 2s infinite linear;
`;
