import React from 'react';
import { UnorderedList } from './List.style';

const Ul = ({ className, children}) =><UnorderedList className={className}>{children}</UnorderedList>;

export default Ul;