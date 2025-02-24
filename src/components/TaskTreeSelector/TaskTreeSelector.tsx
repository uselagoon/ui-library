import React, { forwardRef } from 'react';

import { TreeSelect, TreeSelectProps } from 'antd';
import styled, { css } from 'styled-components';

type UITreeSelectProps = { sectionsCheckable?: boolean } & Omit<
	TreeSelectProps,
	'multiple' | 'treeIcon' | 'treeDefaultExpandAll' | 'treeLine' | 'treeCheckable'
>;

const InternalTreeSelector: React.ForwardRefRenderFunction<any, UITreeSelectProps> = (
	{ treeData, placeholder, sectionsCheckable = false, ...rest },
	ref,
) => {
	return (
		<TreeSelect
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

const StyledDropdown = styled.section`
	.ant-select-tree {
		background-color: #fff;

		.ant-select-tree-treenode {
			* {
				color: #000 !important;
			}
		}
	}
`;

const UITreeSelect = forwardRef<HTMLElement, UITreeSelectProps>(InternalTreeSelector);

UITreeSelect.displayName = 'TreeSelect';

export type { UITreeSelectProps };
export default UITreeSelect;
