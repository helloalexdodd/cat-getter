import styled from 'styled-components';
import themeStyles from '../../theme';
import { Text } from '../Typography';
import Button from '../Button';

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
  margin: 20px 0;
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold}
`;
