import React from 'react';
import { Ul, Li } from '../List';
import Link from '../Link';

import { NavElement } from './Nav.style';

const Nav = () => (
  <NavElement>
    <Ul>
      <Li>
        <Link router href="/">Home</Link>
      </Li>
      <Li>
        <Link router href="/about">About</Link>
      </Li>
    </Ul>
  </NavElement>
);

export default Nav;
