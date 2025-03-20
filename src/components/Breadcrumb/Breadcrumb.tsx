import React, { FC, Fragment, MouseEventHandler, ReactElement, ReactNode } from 'react';
import { BreadcrumbProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

import CopyToClipboard from '../CopyToClipboard';
import { StyledBreadcrumb, WithCopy, Wrapper } from './styles';

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
				copyText?: string;
		  } & Pick<ItemType, 'title'>)
		| {
				title: LinkComponent;
				key?: string | number;
				copyText?: string;
		  }
		| { separator: ReactNode; type: 'separator' }
	)[];

	activeKey?: string | number;
}

const UIBreadcrumb: FC<UIBreadcrumbProps> = (props) => {
	const { activeKey, items, type, ...rest } = props;

	const decoratorList = type && ['default', 'orgs'].includes(type) ? decorators[type] : null;

	let defaultMargins = false;

	const modifiedItems = items.map((item, idx) => {
		const titleDecorator = decoratorList ? decoratorList[idx] : null;

		if (!('separator' in item) && 'navOnClick' in item) {
			const { title, navOnClick, key } = item;

			let isActive = false;
			defaultMargins = true;

			if (activeKey && activeKey === key) isActive = true;

			const activeDataProp = isActive ? { ['data-active']: 'active' } : {};

			const wrapperChildren = (
				<Wrapper>
					{titleDecorator ? <span>{titleDecorator}</span> : null}
					{title}
				</Wrapper>
			);
			return {
				...item,
				title: navOnClick ? (
					<a {...activeDataProp}>{wrapperChildren}</a>
				) : (
					<span {...activeDataProp}>{wrapperChildren}</span>
				),
				onClick: navOnClick || undefined,
			};
		} else if (!('separator' in item) && !('navOnClick' in item)) {
			const { title, key, copyText } = item;

			let isActive = false;

			if (activeKey && activeKey === key) isActive = true;

			const activeDataProp = isActive ? { ['data-active']: 'active' } : {};

			const shouldCopyToClipboardRender = !!(titleDecorator && copyText);
			return {
				...item,
				title: (
					<Fragment key={key}>
						<Wrapper {...activeDataProp}>
							<span className="decorator"> {titleDecorator}</span>
							<WithCopy {...activeDataProp}>
								{title}
								<div className="copy">
									{shouldCopyToClipboardRender && <CopyToClipboard text={copyText} iconOnly />}
								</div>
							</WithCopy>
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

	return (
		<StyledBreadcrumb
			$defaultMargins={defaultMargins}
			data-cy="page-title"
			style={{ marginBottom: '2rem' }}
			items={modifiedItems}
			{...rest}
		/>
	);
};

UIBreadcrumb.displayName = 'Breadcrumb';
export default UIBreadcrumb;
