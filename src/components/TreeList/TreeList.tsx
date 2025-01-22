import React, { forwardRef, ReactNode } from 'react';

import { Popover, Tree } from 'antd';
import { PopoverContainer } from './styles';

type TreeData = {
	sectionTitle: ReactNode;
	sectionChildren: ReactNode[];
};
type TreeListProps = {
	children: ReactNode;
	data: TreeData[];
};

const InternalTreeList: React.ForwardRefRenderFunction<any, TreeListProps> = ({ data, children }, ref) => {
	// convert TreeData[] to type (BasicDataNode | DataNode)[];
	const internalTreeData = data.map((item, idx) => {
		return {
			key: `${item.sectionTitle}-item-${idx}`,
			title: item.sectionTitle,
			selectable: false,
			value: null,
			children: item.sectionChildren.map((child, idx) => {
				return {
					title: child,
					selectable: false,
					icon: null,
					value: null,
					key: `${item.sectionTitle}-child${idx}`,
				};
			}),

			icon: null,
		};
	});
	return (
		<Popover
			ref={ref}
			trigger="hover"
			placement="bottomRight"
			overlayClassName="ui-treelink-overlay"
			content={
				<Tree
					ref={ref}
					defaultExpandAll
					treeData={internalTreeData}
					showLine={false}
					multiple={false}
					showIcon={true}
					rootClassName="ui-treelink"
				/>
			}
		>
			<PopoverContainer> {children} </PopoverContainer>
		</Popover>
	);
};

const TreeList = forwardRef<HTMLElement, TreeListProps>(InternalTreeList);

TreeList.displayName = 'TreeList';

export type { TreeListProps };
export default TreeList;
