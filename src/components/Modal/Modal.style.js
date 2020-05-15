import styled from 'styled-components';
import theme from '../../theme';
import { Text } from '../Typography';
import Button from '../Button';

export const modalStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: `${theme.colors.primary}`,
    padding: '40px',
    border: `${theme.borders[2]} ${theme.colors.secondary}`,
    borderRadius: `${theme.radii.modal}`,
    boxShadow: `${theme.shadows.box.modal}`,
    transform: 'translate(-50%, -50%)',
    transition: '0.3s',
  },
  overlay: {
    backgroundColor: `${theme.colors.blackTransparent}`,
  },
};

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold}
`;