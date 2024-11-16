import React, { forwardRef } from 'react';

import { TreeSelect, TreeSelectProps } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

type UITreeSelectProps = { sectionsCheckable?: boolean } & Omit<
	TreeSelectProps,
	'multiple' | 'treeIcon' | 'treeDefaultExpandAll' | 'treeLine' | 'treeCheckable'
>;

const InternalTreeSelector: React.ForwardRefRenderFunction<any, UITreeSelectProps> = (
	{ treeData, placeholder, sectionsCheckable = false, ...rest },
	ref,
) => {
	return (
		<StyledTree
			ref={ref}
			placeholder={placeholder || 'Select an action'}
			treeDefaultExpandAll={true}
			treeData={treeData}
			treeLine={false}
			multiple={false}
			treeIcon={true}
			treeCheckable={sectionsCheckable}
			popupClassName="ui-tree"
			dropdownRender={(menu) => <StyledDropdown>{menu}</StyledDropdown>}
			dropdownStyle={{ width: 'max-content', minWidth: '550px' }}
			{...rest}
		/>
	);
};

const StyledTree = styled(TreeSelect)`
	min-width: 250px;
	width: max-content;
	&.ant-select {
		width: max-content !important;

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
const StyledDropdown = styled.section`
	.ant-select-tree {
		background-color: #fff;
		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				box-shadow:
					2px 2px 3px 0px #3333331a,
					-2px -2px 3px 0px #3333331a;
				background-color: ${colors.cellGray};
				& > * {
					color: ${colors.white};
				}

				.ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
					background-color: ${colors.lighterGray};
					color: ${colors.lagoonBlue} !important;
				}
			`};
		span[aria-hidden='true'] {
			display: none;
		}
	}
`;

const UITreeSelect = forwardRef<HTMLElement, UITreeSelectProps>(InternalTreeSelector);

UITreeSelect.displayName = 'TreeSelect';

export type { UITreeSelectProps };
export default UITreeSelect;
