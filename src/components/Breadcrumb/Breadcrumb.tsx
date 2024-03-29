import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import colors from '../../_util/colors';

export interface UIBreadcrumbProps extends Omit<BreadcrumbProps, 'itemRender' | 'params'> {
	prependSeparator?: ReactNode;
	items: (
		| ({
				navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
				key?: string | number;
		  } & Pick<ItemType, 'title'>)
		| { separator: ReactNode; type: 'separator' }
	)[];
	activeKey?: string | number;
}

const UIBreadcrumb: FC<UIBreadcrumbProps> = (props) => {
	const { prependSeparator, activeKey, items, ...rest } = props;

	const modifiedItems = items.map((item) => {
		if (!('separator' in item)) {
			const { title, navOnClick, key } = item;

			let isActive = false;
			if (activeKey && activeKey === key) isActive = true;

			const activeDataProp = isActive ? { ['data-active']: 'active' } : {};

			return {
				...item,
				title: navOnClick ? <a {...activeDataProp}>{title}</a> : <span {...activeDataProp}> {title}</span>,
				onClick: navOnClick || undefined,
			};
		} else {
			return item;
		}
	});

	if (prependSeparator)
		modifiedItems.unshift({
			separator: prependSeparator,
			type: 'separator',
		});

	return <StyledBreadcrumb items={modifiedItems} {...rest} />;
};

const StyledBreadcrumb = styled(Breadcrumb)`
	&.ant-breadcrumb {
		font-family: 'ArabicPro-Regular', sans-serif;
		font-size: 0.875rem;
		line-height: 1.375rem;
		li:not(.ant-breadcrumb-separator) {
			&:not(:last-child) {
				span,
				a {
					text-decoration: underline;
					cursor: pointer;
				}
			}
		}

		li,
		span,
		a {
			color: ${(props) => props.theme.UI.texts.secondary};

			&[data-active='active'] {
				color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
			}
		}
		& a:hover {
			background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#0000000f' : colors.lighterGray)};
		}
	}
`;

UIBreadcrumb.displayName = 'Breadcrumb';
export default UIBreadcrumb;
