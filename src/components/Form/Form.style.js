import styled from 'styled-components';

export const FormElement = styled.form`
  margin: 20px 0;

  label {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  input {
    margin: 10px;
    padding: 5px 10px;
  }

  button {
    color: ${({ theme }) => theme.colors.focus};
    border: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.focus}`};
    
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.tertiary};
      border: ${({ theme: { borders, colors } }) => `${borders[1]} ${colors.tertiary}`};
    }
  }
`;
