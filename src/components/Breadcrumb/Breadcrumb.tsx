import React, { FC, Fragment, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import colors from '../../_util/colors';

// type when array of Next links are used
type Component<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = ReactElement<T>;
type LinkComponent = Component<'a'>;

const decorators = {
	default: ['', 'project', 'environment'],
	orgs: ['', 'organization', 'project'],
};
export interface UIBreadcrumbProps extends Omit<BreadcrumbProps, 'itemRender' | 'params'> {
	type?: 'default' | 'orgs';
	items: (
		| ({
				navOnClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
				key?: string | number;
		  } & Pick<ItemType, 'title'>)
		| {
				key?: string | number;
				title: LinkComponent;
		  }
		| { separator: ReactNode; type: 'separator' }
	)[];

	activeKey?: string | number;
}

const UIBreadcrumb: FC<UIBreadcrumbProps> = (props) => {
	const { activeKey, items, type, ...rest } = props;

	const decoratorList = type && ['default', 'orgs'].includes(type) ? decorators[type] : null;

	const modifiedItems = items.map((item, idx) => {
		const titleDecorator = decoratorList ? decoratorList[idx] : null;

		if (!('separator' in item) && 'navOnClick' in item) {
			const { title, navOnClick, key } = item;

			let isActive = false;

			if (activeKey && activeKey === key) isActive = true;

			const activeDataProp = isActive ? { ['data-active']: 'active' } : {};

			return {
				...item,
				title: navOnClick ? (
					<a {...activeDataProp}>
						<Wrapper>
							<span> {titleDecorator}</span>
							{title}
						</Wrapper>
					</a>
				) : (
					<span {...activeDataProp}>
						<Wrapper>
							<span> {titleDecorator}</span>
							{title}
						</Wrapper>
					</span>
				),
				onClick: navOnClick || undefined,
			};
		} else if (!('separator' in item) && !('navOnClick' in item)) {
			const { title, key } = item;

			let isActive = false;

			if (activeKey && activeKey === key) isActive = true;

			const activeDataProp = isActive ? { ['data-active']: 'active' } : {};
			return {
				...item,
				title: (
					<Fragment key={key}>
						<Wrapper {...activeDataProp}>
							<span> {titleDecorator}</span>
							{title}
						</Wrapper>
					</Fragment>
				),
			};
		} else {
			return item;
		}
	});
	// always prepend with " / "
	modifiedItems.unshift({ type: 'separator', separator: '/' });

	return <StyledBreadcrumb style={{ marginBottom: '2rem' }} items={modifiedItems} {...rest} />;
};

const StyledBreadcrumb = styled(Breadcrumb)`
	&.ant-breadcrumb {
		font-size: 1.2rem;
		line-height: 25px;

		li,
		span,
		a {
			transition: all 0.25s ease;
			color: ${(props) => props.theme.UI.texts.secondary};
			&[data-active='active'] {
				color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
			}
		}
		& a:hover {
			background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#0000000f' : colors.lighterGray)};
		}

		li.ant-breadcrumb-separator:nth-last-child(2) {
			color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	position: relative;

	&[data-active='active'] > *:last-child {
		color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
		text-decoration: none !important;
	}

	span {
		left: 0;
		font-size: 13px;
		font-weight: bolder;
		color: ${colors.lagoonBlue} !important;
		top: -100%;
		position: absolute;
		pointer-events: none;
		user-select: none;
		text-transform: uppercase;
		text-decoration: none !important;
		border-bottom: none !important;
	}
`;

UIBreadcrumb.displayName = 'Breadcrumb';
export default UIBreadcrumb;
