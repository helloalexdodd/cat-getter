import styled from 'styled-components';

import {
  TemperamentButton as ExtendedButton,
  TemperamentButtonsContainer as ExtendedButtonContainer,
} from '../Modal/Modal.style';

export const TemperamentButtonsContainer = styled(ExtendedButtonContainer)`
  border-top: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.black}`};
  border-bottom: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.black}`};
  margin: 40px auto;
  padding: 40px;
  justify-content: center;
`;

export const TemperamentButton = styled(ExtendedButton)`
  color: ${({ theme }) => theme.colors.primary}
`;
