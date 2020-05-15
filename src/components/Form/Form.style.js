import styled from 'styled-components';

export const FormElement = styled.form`
  margin: 20px 0;

  label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  input {
    margin: 0 10px 10px;
    padding: 5px 10px;
  }
`;