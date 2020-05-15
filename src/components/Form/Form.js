import React from 'react';
import Button from '../Button';
import { FormElement } from './Form.style';

const Form = ({
  userInput,
  handleOnChange,
  handleOnSubmit
}) => {
  return (
    <FormElement onSubmit={(e) => handleOnSubmit(e)}>
      <label htmlFor="search">Or start typing to filter through breeds:</label>
      <input
        type="search"
        id="search"
        value={userInput}
        onChange={handleOnChange}
      />
      <label htmlFor="submit"></label>
      <Button
        type="submit"
        id="submit"
      >
        Reset Filter
      </Button>
    </FormElement>
  );
};

export default Form