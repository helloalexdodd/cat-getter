import styled from 'styled-components';
import themeStyles from '../../theme';
import { Text } from '../Typography';
import Button from '../Button';
import Label from '../Label';
import { Ul } from '../List';

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: `${themeStyles.colors.primary}`,
    padding: '20px',
    width: '70%',
    border: `${themeStyles.borders[2]} ${themeStyles.colors.secondary}`,
    borderRadius: `${themeStyles.radii.modal}`,
    boxShadow: `${themeStyles.shadows.box.modal}`,
    transform: 'translate(-50%, -50%)',
    transition: '0.3s',
  },
  overlay: {
    backgroundColor: `${themeStyles.colors.blackTransparent}`,
  },
};

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  margin: 20px 0 10px;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled(Button)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

export const StyledLabel = styled(Label)`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const TemperamentButtonsContainer = styled(Ul)`
  margin: 20px 0;
`;

export const TemperamentButton = styled(CloseButton)`
  display: inline-block;
  margin: 5px 0;
  border: none;
  padding-left: 0;
  padding-right: 10px;

  &:hover,
  &:focus {
    border: none;
  }
`;

export const Span = styled.span`
  display: inline-block;
  margin: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold}
`;
