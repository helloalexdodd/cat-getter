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
  children: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.node,
  ),
};

export default Label;
