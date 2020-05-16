import React from 'react';
import PropTypes from 'prop-types';

import { SectionElement } from './Section.style';

const Section = ({ className, children }) => (
  <SectionElement className={className}>{children}</SectionElement>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
