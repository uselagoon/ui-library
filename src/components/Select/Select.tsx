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
		<StyledSelect
			ref={ref}
			onChange={onChange ?? deferredChangeHandler}
			value={value || selectedState || undefined}
			defaultOpen={props.defaultOpen || true}
			style={style}
			dropdownRender={(menu) => {
				return <StyledDropDown data-cy="select-menu">{menu}</StyledDropDown>;
			}}
			onDropdownVisibleChange={(open) => setIsOpen(open)}
			{...rest}
			suffixIcon={isOpen ? <UpOutlined /> : <DownOutlined />}
			size={size ?? 'middle'}
		/>
	);
});

const StyledSelect = styled(Select)<SelectProps>`
	&.ant-select {
		& .ant-select-selector {
			span {
				color: #333;
			}
			.ant-select-selection-placeholder {
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#1f1f1f')};
			}
			border-radius: 2px;
		}

		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				& .ant-select-selector {
					background-color: #1f1f1f;
					span {
						color: #fff;
					}
				}
				& .ant-select-arrow {
					color: #fff;
				}
			`}
	}
`;

const StyledDropDown = styled.section`
	${(props) =>
		props.theme.colorScheme === 'dark' &&
		css`
			background-color: #1f1f1f;

			.ant-select-item.ant-select-item-option {
				color: #fff;
			}
		`}
`;
UISelect.displayName = 'Select';

export type { SelectProps as UISelectProps };

export default UISelect;
