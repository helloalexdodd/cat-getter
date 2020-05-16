import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
} from './Headings.style';

const H1 = ({ className, children }) => <StyledH1 className={className}>{children}</StyledH1>;

const H2 = ({ className, children }) => <StyledH2 className={className}>{children}</StyledH2>;

const H3 = ({ className, children }) => <StyledH3 className={className}>{children}</StyledH3>;

const H4 = ({ className, children }) => <StyledH4 className={className}>{children}</StyledH4>;

const H5 = ({ className, children }) => <StyledH5 className={className}>{children}</StyledH5>;

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H4.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H5.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  H1,
  H2,
  H3,
  H4,
  H5,
};
