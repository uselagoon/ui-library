import React from 'react';
import { TitleProps } from 'antd/es/typography/Title';
export type Heading = 1 | 2 | 3 | 4 | 5;
export type InternalHeadingProps = Omit<TitleProps, 'level'> & {
    level?: Heading;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};
declare const Heading: React.ForwardRefExoticComponent<Omit<TitleProps, "level"> & {
    level?: Heading | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
    style?: React.CSSProperties | undefined;
} & React.RefAttributes<HTMLHeadingElement>>;
export default Heading;
