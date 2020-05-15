import React from 'react';
import { ListItem } from './List.style';

const Li = ({ className, key, children}) =><ListItem className={className} key={key}>{children}</ListItem>;

export default Li;