import React, { forwardRef } from "react";
import { InputProps, InputRef } from "antd";
import { StyledInput } from "./styles";

const InternalInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  props,
  ref
) => {
  return <StyledInput {...props} ref={ref} />;
};

const UIInput = forwardRef<InputRef, InputProps>(InternalInput);

UIInput.displayName = "UIInput";

export default UIInput;

export type { InputProps as UIInputProps };
