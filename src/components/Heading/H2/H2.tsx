import React from 'react';
import { InternalHeadingProps } from '../Heading';
import UIHeading from '..';

const Head2 = React.forwardRef<HTMLHeadingElement, Omit<InternalHeadingProps, 'level'>>((props, ref) => {
	return <UIHeading ref={ref} level={2} {...props} />;
});

Head2.displayName = 'UIHead2';

export default Head2;
