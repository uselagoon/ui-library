import React from "react";
import { InternalHeadingProps } from "../Heading";
import UIHeading from "..";

const UIHead5 = React.forwardRef<
  HTMLHeadingElement,
  Omit<InternalHeadingProps, "level">
>((props, ref) => {
  return <UIHeading ref={ref} level={5} {...props} />;
});

UIHead5.displayName = "UIHead5";

export default UIHead5;
