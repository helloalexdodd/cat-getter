import React from 'react';
import catIcon from '../../assets/catIcon.png'
import { H1, H2 } from '../Typography';
import { HeaderElement } from './Header.style';

const Header = () => (
  <HeaderElement>
    <img src={catIcon} alt="orange cat logo" />
    <H1>Cat Getter</H1>
    <H2>Get Some Cats!</H2>
  </HeaderElement>
);

export default Header;
