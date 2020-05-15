import styled from 'styled-components';

export const FooterElement = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  padding: 30px;

  p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    p {
      font-size: ${({ theme }) => theme.fontSizes[1]};
    }
  }
`;
