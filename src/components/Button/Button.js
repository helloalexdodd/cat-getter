import React from 'react';

import { ButtonElement } from './Button.style';

const Button = ({
  type,
  id,
  className,
  onClick,
  children
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

export default Button;
