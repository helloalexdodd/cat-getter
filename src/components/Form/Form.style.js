import styled from 'styled-components';

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  
  input {
    margin: 10px;
    padding: 5px 10px;
  }

  button {
    align-self: center;
    color: ${({ theme }) => theme.colors.focus};
    border: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.focus}`};
    
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.tertiary};
      border: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.tertiary}`};
    }
  }
`;
