import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from './Button.style';

const Button = ({
  type,
  id,
  className,
  onClick,
  children,
}) => (
  <ButtonElement
    type={type}
    id={id}
    className={className}
    onClick={onClick}
  >
    {children}
  </ButtonElement>
);

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
