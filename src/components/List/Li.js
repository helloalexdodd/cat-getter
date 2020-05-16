import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from './List.style';

const Li = ({ className, children }) => (
  <ListItem
    className={className}
  >
    {children}
  </ListItem>
);

Li.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Li;
