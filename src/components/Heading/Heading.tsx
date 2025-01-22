import React, { forwardRef } from 'react';
import { TitleProps } from 'antd/es/typography/Title';
import { Typography } from 'antd';

export type Heading = 1 | 2 | 3 | 4 | 5;

export type InternalHeadingProps = Omit<TitleProps, 'level'> & {
	level?: Heading;
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
};

const { Title } = Typography;

const InternalHeader: React.ForwardRefRenderFunction<HTMLHeadingElement, InternalHeadingProps> = (
	{ level = 1, className, children, style, ...props }: InternalHeadingProps,
	ref,
) => {
	return (
		<Title level={level} ref={ref} className={className} style={style} {...props}>
			{children}
		</Title>
	);
};

const Heading = forwardRef<HTMLHeadingElement, InternalHeadingProps>(InternalHeader);

Heading.displayName = 'UIHeadingBase';

export default Heading;
