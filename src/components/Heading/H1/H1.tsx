import React from "react";
import { InternalHeadingProps } from "../Heading";
import UIHeading from "..";

const UIHead1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<InternalHeadingProps, "level">
>((props, ref) => {
  return <UIHeading ref={ref} level={1} {...props} />;
});

UIHead1.displayName = "UIHead1";

export default UIHead1;
