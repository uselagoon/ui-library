import React from 'react';
import { InternalHeadingProps } from '../Heading';
import UIHeading from '..';

const Head4 = React.forwardRef<HTMLHeadingElement, Omit<InternalHeadingProps, 'level'>>((props, ref) => {
	return <UIHeading ref={ref} level={4} {...props} />;
});

Head4.displayName = 'UIHead4';

export default Head4;
