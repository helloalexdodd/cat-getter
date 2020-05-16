import React from 'react';
import PropTypes from 'prop-types';

import { UnorderedList } from './List.style';

const Ul = ({ className, children }) => (
  <UnorderedList className={className}>{children}</UnorderedList>
);

Ul.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
};

export default Ul;
