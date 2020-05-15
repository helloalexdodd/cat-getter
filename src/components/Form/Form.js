import React from 'react';
import Button from '../Button';
import { FormElement } from './Form.style';

const Form = ({
  userInput,
  handleOnChange,
  handleOnSubmit
}) => (
  <FormElement onSubmit={(e) => handleOnSubmit(e)}>
    <div>
      <label htmlFor="search">Or start typing to filter through breeds:</label>
      <input
        type="search"
        id="search"
        value={userInput}
        onChange={handleOnChange}
      />
    </div>
    <label htmlFor="submit" class="sr-only">Reset Filter</label>
    <Button
      type="submit"
      id="submit"
    >
      Reset Filter
    </Button>
  </FormElement>
);

export default Form