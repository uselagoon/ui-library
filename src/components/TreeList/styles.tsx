import { Tree } from 'antd';
import styled, { css } from 'styled-components';

export const PopoverContainer = styled.div`
	display: inline-block;
`;

export const StyledTree = styled(Tree)`
	background-color: transparent;
	padding-right: 1.5rem;
	.ant-tree-indent {
		display: none;
	}
	.ant-tree-treenode:has(.ant-tree-switcher_open, .ant-tree-switcher_close) {
		span[role='img'] {
			font-size: 16px;
			transform: translateY(4px);
		}
		.ant-tree-title {
			font-size: 16px;
		}
	}
	span {
		color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : 'initial')};
		.ant-tree-node-selected {
			background-color: unset !important;
		}
	}
`;
