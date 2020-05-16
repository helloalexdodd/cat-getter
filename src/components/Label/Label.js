import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from './Label.style';

const Label = ({ htmlFor, className, children }) => (
  <StyledLabel
    htmlFor={htmlFor}
    className={className}
  >
    {children}
  </StyledLabel>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default Label;
