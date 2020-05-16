import React from 'react';
import PropTypes from 'prop-types';
import { A, RouterLink } from './Link.style';

const Link = ({
  href,
  onClick,
  router,
  className,
  children,
}) => (
  router
    ? (
      <RouterLink
        to={href}
        onClick={onClick}
        className={className}
      >
        {children}
      </RouterLink>
    )
    : (
      <A
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </A>
    )
);

Link.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  router: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Link;
