import React from 'react';
import { InternalHeadingProps } from '../Heading';
import UIHeading from '..';

const Head3 = React.forwardRef<HTMLHeadingElement, Omit<InternalHeadingProps, 'level'>>((props, ref) => {
	return <UIHeading ref={ref} level={3} {...props} />;
});

Head3.displayName = 'UIHead3';

export default Head3;
