import React from 'react';
import { HeaderProps } from '../Header';
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
declare const PageContainer: React.ForwardRefExoticComponent<PageContainerProps & React.RefAttributes<HTMLDivElement>>;
export default PageContainer;
export type { PageContainerProps };
