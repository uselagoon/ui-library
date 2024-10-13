import React from 'react';
import { InternalHeadingProps } from '../Heading';
import UIHeading from '..';

const Head5 = React.forwardRef<HTMLHeadingElement, Omit<InternalHeadingProps, 'level'>>((props, ref) => {
	return <UIHeading ref={ref} level={5} {...props} />;
});

Head5.displayName = 'UIHead5';

export default Head5;
