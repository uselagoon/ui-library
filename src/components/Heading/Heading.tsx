import React, { forwardRef } from "react";
import UITitleElement from "./Styles";
import { TitleProps } from "antd/es/typography/Title";

export type Heading = 1 | 2 | 3 | 4 | 5;

export type InternalHeadingProps = Omit<TitleProps, "level"> & {
  level?: Heading;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const InternalHeader: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  InternalHeadingProps
> = (
  { level = 1, className, children, style, ...props }: InternalHeadingProps,
  ref
) => {
  return (
    <UITitleElement
      level={level}
      ref={ref}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </UITitleElement>
  );
};

const Heading = forwardRef<HTMLHeadingElement, InternalHeadingProps>(
  InternalHeader
);

Heading.displayName = "UIHeadingBase";

export default Heading;
