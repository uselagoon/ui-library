import React, { forwardRef } from 'react';
import { StyledPageContainer } from './styles';
import LagoonHeader, { HeaderProps } from '../Header';

type WithHeader = {
	showHeader: true;
	headerProps: HeaderProps;
};
type WithoutHeader = {
	showHeader: false;
	headerProps: never;
};

type PageContainerProps = {
	className?: string;
	children?: React.ReactNode;
} & (WithHeader | WithoutHeader);

const InternalPageContainer: React.ForwardRefRenderFunction<HTMLDivElement, PageContainerProps> = (
	{ children, showHeader, headerProps, className },
	ref,
) => {
	// this component will be used as a RootLayout
	return (
		<StyledPageContainer ref={ref} className={className}>
			{showHeader ? <LagoonHeader {...headerProps} /> : null}
			<main className="content">{children}</main>
		</StyledPageContainer>
	);
};

const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(InternalPageContainer);

PageContainer.displayName = 'PageContainer';

export default PageContainer;

export type { PageContainerProps };
