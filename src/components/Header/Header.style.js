import styled from 'styled-components';

export const HeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 40vh;
  color: ${({ theme }) => theme.colors.white}
`;
