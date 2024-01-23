import React from "react";
import { InternalHeadingProps } from "../Heading";
import UIHeading from "..";

const UIHead3 = React.forwardRef<
  HTMLHeadingElement,
  Omit<InternalHeadingProps, "level">
>((props, ref) => {
  return <UIHeading ref={ref} level={3} {...props} />;
});

UIHead3.displayName = "UIHead3";

export default UIHead3;
