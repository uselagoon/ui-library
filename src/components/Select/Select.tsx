import React, { forwardRef, useState } from 'react';
import { RefSelectProps, Select, SelectProps } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

type SelectedState = any;

type UISelectProps = SelectProps & {
	selectedState?: SelectedState;
	setSelectedState?: React.Dispatch<React.SetStateAction<SelectedState>>;
};

const UISelect = forwardRef<RefSelectProps, UISelectProps>((props, ref) => {
	const { className, style, onChange, value, selectedState, setSelectedState, size, ...rest } = props;

	const [isOpen, setIsOpen] = useState(false);

	const deferredChangeHandler = (value: any) => {
		setSelectedState && setSelectedState(value);
	};
	return (
		<Select
			ref={ref}
			onChange={onChange ?? deferredChangeHandler}
			value={value || selectedState || undefined}
			defaultOpen={props.defaultOpen || true}
			style={style}
			dropdownRender={(menu) => {
				return <StyledDropDown>{menu}</StyledDropDown>;
			}}
			onDropdownVisibleChange={(open) => setIsOpen(open)}
			{...rest}
			suffixIcon={isOpen ? <UpOutlined /> : <DownOutlined />}
			size={size ?? 'middle'}
		/>
	);
});

const StyledDropDown = styled.section`
	background-color: #fff;
`;

UISelect.displayName = 'Select';

export type { SelectProps as UISelectProps };

export default UISelect;
