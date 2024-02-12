import React from "react";
import { InternalHeadingProps } from "../Heading";
import UIHeading from "..";

const Head1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<InternalHeadingProps, "level">
>((props, ref) => {
  return <UIHeading ref={ref} level={1} {...props} />;
});

Head1.displayName = "UIHead1";

export default Head1;
