import React, { forwardRef } from 'react';
import { InputProps, InputRef } from 'antd';

import { Input } from 'antd';

const InternalInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (props, ref) => {
	return <Input {...props} ref={ref} />;
};

const UIInput = forwardRef<InputRef, InputProps>(InternalInput);

UIInput.displayName = 'Input';

export default UIInput;

export type { InputProps as UIInputProps };
