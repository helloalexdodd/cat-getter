import React from 'react';
import PropTypes from 'prop-types';
import { WrapperElement } from './Wrapper.style';

const Wrapper = ({ children }) => <WrapperElement>{children}</WrapperElement>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
