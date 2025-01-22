import React, { forwardRef } from 'react';
import { Checkbox, CheckboxProps, CheckboxRef } from 'antd';

const UICheckbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
	const { className, style, ...rest } = props;

	return <Checkbox ref={ref} style={style} {...rest} />;
});

export type { CheckboxProps as UICheckboxProps };

UICheckbox.displayName = 'Checkbox';
export default UICheckbox;
