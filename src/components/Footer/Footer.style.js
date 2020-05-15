import styled from 'styled-components';

export const FooterElement = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  height: 8vh;
`;
