import React, { forwardRef, useState } from 'react';
import { RefSelectProps, Select, SelectProps } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

type SelectedState = unknown;

type UISelectProps = SelectProps & {
	selectedState?: SelectedState;
	setSelectedState?: React.Dispatch<React.SetStateAction<SelectedState>>;
};

const UISelect = forwardRef<RefSelectProps, UISelectProps>((props, ref) => {
	const { className, style, onChange, selectedState, setSelectedState, ...rest } = props;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<StyledSelect
			ref={ref}
			onChange={(value) => {
				setSelectedState && setSelectedState(value);
			}}
			value={selectedState || null}
			defaultOpen={props.defaultOpen || true}
			style={style}
			dropdownRender={(menu) => {
				return <StyledDropDown>{menu}</StyledDropDown>;
			}}
			onDropdownVisibleChange={(open) => setIsOpen(open)}
			{...rest}
			suffixIcon={isOpen ? <UpOutlined /> : <DownOutlined />}
		/>
	);
});

const StyledSelect = styled(Select)<SelectProps>`
	&.ant-select {
		min-width: 13.125rem;
		height: 2.5rem;

		& .ant-select-selector {
			span {
				color: #333;
			}
			border-radius: 2px;
		}

		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				& .ant-select-selector {
					background-color: ${colors.darkGray};
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
	background-color: initial;
	${(props) =>
		props.theme.colorScheme === 'dark' &&
		css`
			background-color: ${colors.cellGray};

			.ant-select-item.ant-select-item-option {
				color: #fff;
			}
			.ant-select-item.ant-select-item-option.ant-select-item-option-active {
				background-color: ${colors.gray};
			}
			.ant-select-item.ant-select-item-option.ant-select-item-option-selected {
				background-color: ${colors.gray};
			}
		`}
`;

UISelect.displayName = 'Select';

export type { SelectProps as UISelectProps };

export default UISelect;
