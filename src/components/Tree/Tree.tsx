import React, { forwardRef } from 'react';

import { Tree, TreeDataNode, TreeProps } from 'antd';
import { DataNode } from 'antd/es/tree';
import { DownOutlined } from '@ant-design/icons';

type UITreeProps = {
	items: TreeDataNode[];
	onClick?: TreeProps<DataNode>['onClick'];
} & Omit<TreeProps, 'defaultExpandAll' | 'showLine' | 'multiple' | 'checkable' | 'showIcon' | 'switcherIcon'>;

const InternalTree: React.ForwardRefRenderFunction<React.ElementRef<typeof Tree>, UITreeProps> = (
	{ className, children, items, onClick, ...props }: UITreeProps,
	ref,
) => {
	return (
		<Tree
			ref={ref}
			showIcon
			treeData={items}
			defaultExpandAll={true}
			showLine={false}
			multiple={false}
			checkable={false}
			className="ui-dropdowntree"
			{...props}
		/>
	);
};

const UITree = forwardRef<React.ElementRef<typeof Tree>, UITreeProps>(InternalTree);

UITree.displayName = 'Tree';

export type { UITreeProps };

export default UITree;
