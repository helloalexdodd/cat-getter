import styled from 'styled-components';

export const NavElement = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.black};
  height: 10vh;
  color: ${({ theme }) => theme.colors.secondary};

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 40px;
    
    li {
      margin: 0 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    justify-content: center;
    
    ul {
      padding-left: 0;
    }
  }
`;
