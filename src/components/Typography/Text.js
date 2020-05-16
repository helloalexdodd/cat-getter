import React from 'react';
import PropTypes from 'prop-types';

import { P } from './Text.style';

const Text = ({ className, children }) => <P className={className}>{children}</P>;

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
