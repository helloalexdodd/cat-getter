import styled from 'styled-components';
import { Ul } from '../List';
import Button from '../Button';

export const List = styled(Ul)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.fontSizes[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }
`;
