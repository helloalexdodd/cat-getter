import React from 'react';

import { SectionElement } from './Section.style';

const Section = ({ className, children }) => <SectionElement className={className}>{children}</SectionElement>;

export default Section;
