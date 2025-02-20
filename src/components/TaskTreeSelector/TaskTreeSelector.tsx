import React, { forwardRef } from 'react';

import { TreeSelect, TreeSelectProps } from 'antd';
import styled, { css } from 'styled-components';

type UITreeSelectProps = { sectionsCheckable?: boolean } & Omit<
	TreeSelectProps,
	'multiple' | 'treeIcon' | 'treeDefaultExpandAll' | 'treeLine' | 'treeCheckable'
>;

const addDataCyToTreeData = (data: any[], dataCy: string): any[] => {
	return data.map((item) => ({
		...item,
		title: <span data-cy={dataCy}>{item.title}</span>,
		children: item.children ? addDataCyToTreeData(item.children, dataCy) : [],
	}));
};

const InternalTreeSelector: React.ForwardRefRenderFunction<any, UITreeSelectProps> = (
	{ treeData, placeholder, sectionsCheckable = false, ...rest },
	ref,
) => {
	// @ts-ignore
	const treeDataWithTestId = addDataCyToTreeData(treeData, 'tree-item');

	return (
		<TreeSelect
			ref={ref}
			placeholder={placeholder || 'Select an action'}
			treeDefaultExpandAll={true}
			treeData={treeDataWithTestId}
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
	}
`;

const UITreeSelect = forwardRef<HTMLElement, UITreeSelectProps>(InternalTreeSelector);

UITreeSelect.displayName = 'TreeSelect';

export type { UITreeSelectProps };
export default UITreeSelect;
