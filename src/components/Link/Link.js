import React from 'react';
import { A, RouterLink } from './Link.style';

const Link = ({ href, onClick, router, className, children }) => (
  router
  ? <RouterLink
      to={href}
      onClick={onClick}
      className={className}
    >
      {children}
    </RouterLink>
  : <A
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </A>
);

export default Link;
