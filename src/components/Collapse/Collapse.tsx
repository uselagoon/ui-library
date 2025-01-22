import { Collapse, CollapseProps } from 'antd';
import React, { forwardRef, ReactNode } from 'react';
import { ExpandIconPosition } from 'antd/es/collapse/Collapse';

export type UICollapseProps = Omit<CollapseProps, 'expandIconPosition' | 'expandIcon'> & {
	type: 'highlightPanels' | 'default';
	customBorder?: string;
	borderless?: boolean;
	useArrowIcons?: boolean;
	icon?: ReactNode;
};

const UICollapse = forwardRef<HTMLDivElement, UICollapseProps>((props, ref) => {
	const {
		className,
		items,
		style,
		customBorder,
		borderless = false,
		useArrowIcons = false,
		type = 'default',
		icon,
		...rest
	} = props;

	const openWithArrowProps = !useArrowIcons
		? {
				expandIconPosition: 'end' as ExpandIconPosition,
				expandIcon: (panelProps: any) => {
					return panelProps.isActive ? <>Collapse Section</> : <>Expand Section</>;
				},
			}
		: {};

	const withExtraIcon =
		icon && useArrowIcons
			? items?.map((item) => {
					return {
						...item,
						extra: icon,
					};
				})
			: items;

	return <Collapse ref={ref} items={withExtraIcon} {...openWithArrowProps} {...rest} />;
});
UICollapse.displayName = 'Collapse';

export default UICollapse;
