import React from 'react';
import Link from '../Link';
import { Text } from '../Typography';
import { FooterElement } from './Footer.style';

const Footer = () => (
  <FooterElement>
    <Text>This page was created using <Link href={'https://thecatapi.com/'}>The Cat Api</Link></Text>
  </FooterElement>
);

export default Footer;
