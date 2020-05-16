import styled from 'styled-components';
import Button from '../Button';
import { Li } from '../List';

import {
  TemperamentButton as ExtendedButton,
  TemperamentButtonsContainer as ExtendedButtonContainer,
} from '../Modal/Modal.style';

export const TemperamentButtonsContainer = styled(ExtendedButtonContainer)`
  height: ${({ open }) => (open ? 'auto' : 0)};
  justify-content: center;
  margin: 20px auto;
  padding: ${({ open }) => (open ? '40px' : 0)};
  border-top: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.black}`};
  border-bottom: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.black}`};
  overflow: hidden;
`;

export const TemperamentButton = styled(ExtendedButton)`
  color: ${({ theme, selected }) => (selected ? theme.colors.quaternary : theme.colors.primary)};
  &:focus {
    color: ${({ theme, selected }) => (selected ? theme.colors.quaternary : theme.colors.primary)};
  }
`;

export const ListItem = styled(Li)`
  display: inline-block;
`;

export const AnimationButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 8px;
  margin: 15px;
  vertical-align: middle;

  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
