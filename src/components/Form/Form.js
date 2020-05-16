import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Label from '../Label';

import { FormElement } from './Form.style';

const Form = ({
  userInput, handleOnChange, handleOnSubmit, setSelectedTemperaments,
}) => (
  <FormElement onSubmit={(e) => {
    handleOnSubmit(e);
    setSelectedTemperaments([]);
  }}
  >
    <div>
      <Label htmlFor="search">
        or start typing to filter through breeds:
        <input
          type="search"
          id="search"
          value={userInput}
          onChange={handleOnChange}
        />
      </Label>
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
  setSelectedTemperaments: PropTypes.func.isRequired,
};

export default Form;
