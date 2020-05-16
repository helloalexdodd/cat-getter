import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { FormElement } from './Form.style';

const Form = ({
  userInput, handleOnChange, handleOnSubmit,
}) => (
  <FormElement onSubmit={(e) => handleOnSubmit(e)}>
    <div>
      <label htmlFor="search">
        Or start typing to filter through breeds:
        <input
          type="search"
          id="search"
          value={userInput}
          onChange={handleOnChange}
        />
      </label>
    </div>
    <Button
      type="submit"
      id="submit"
    >
      Reset Filter
    </Button>
  </FormElement>
);

Form.propTypes = {
  userInput: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default Form;
