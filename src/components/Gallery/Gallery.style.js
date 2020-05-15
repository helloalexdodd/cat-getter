import styled from 'styled-components';
import { Ul, Li } from '../List';
import Button from '../Button';

export const List = styled(Ul)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ListItem = styled(Li)``;

export const StyledButton = styled(Button)`
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
