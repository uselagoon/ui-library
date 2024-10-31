import { Collapse, CollapseProps } from 'antd';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export type UICollapseProps = Omit<CollapseProps, 'expandIconPosition' | 'expandIcon'> & {
	type: 'highlightPanels' | 'default';
	customBorder?: string;
	borderless?: boolean;
};

const UICollapse = forwardRef<HTMLDivElement, UICollapseProps>((props, ref) => {
	const { className, items, style, customBorder, borderless = false, type = 'default', ...rest } = props;
	return (
		<StyledCollapse
			$customBorder={customBorder}
			$borderless={borderless}
			expandIconPosition="end"
			expandIcon={(panelProps) => {
				return panelProps.isActive ? (
					<CollapseButton>Collapse Section</CollapseButton>
				) : (
					<CollapseButton>Expand Section</CollapseButton>
				);
			}}
			$type={type}
			ref={ref}
			items={items}
			{...rest}
		/>
	);
});
UICollapse.displayName = 'Collapse';

export default UICollapse;

const CollapseButton = styled.span`
	text-decoration: underline;
	font-family: 'ArabicPro-Regular', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 14px;
`;

const StyledCollapse = styled(Collapse)<{
	$type?: UICollapseProps['type'];
	$customBorder?: string;
	$borderless?: boolean;
}>`
	.ant-collapse-content,
	.ant-collapse-item {
		${({ $borderless }) =>
			$borderless &&
			css`
				border-bottom: none !important;
				border-top: none !important;
			`};
	}

	&.ant-collapse {
		font-family: 'ArabicPro-Regular', sans-serif;
		font-size: 14px;
		line-height: 22px;
		overflow: hidden;

		${({ $customBorder }) =>
			$customBorder &&
			css`
				border: 1px solid ${$customBorder} !important;
			`};

		${({ theme, $type, $customBorder }) =>
			theme.colorScheme === 'dark' &&
			css`
				&.ant-collapse{
					border: 1px solid #75715E;
				}
				&.ant-collapse > .ant-collapse-item > .ant-collapse-header {
					background-color: ${colors.darkGray};
					color: ${colors.white};
				}
				.ant-collapse-content {
					${
						$customBorder
							? css`
									border-top-color: ${$customBorder};
								`
							: css`
									border-top-color: #75715e;
								`
					};
						
					}
				}
				.ant-collapse-item {
					${
						$customBorder
							? css`
									border-bottom-color: ${$customBorder};
								`
							: css`
									border-bottom-color: #75715e;
								`
					};
					
					
					&:last-child {
						border-bottom-color: transparent;
					}
				}
				.ant-collapse-content-box {
					background-color: ${colors.gray};

					${
						$type === 'default' &&
						css`
							background-color: ${colors.darkGray};
						`
					}
				}
			`}
	}
`;
