import React from 'react';

import { P } from './Text.style';

const Text = ({ className, children }) => <P className={className}>{children}</P>

export default Text;
