import React, { FC, ReactNode } from 'react';
import { StyledTabChildren, StyledTabs } from './styles';

type BaseItem = {
	key: string;
	label: React.ReactNode;
};
type DefaultItemType = BaseItem & { children?: ReactNode };

type NavItemType = BaseItem;

type DefaultTabType = {
	items: DefaultItemType[];
	type?: 'default';
};

type NavTabType = {
	items: NavItemType[];
	type: 'navigation';
	pathname: string;
};

type UITabsProps = { children?: ReactNode } & (DefaultTabType | NavTabType);

/**
 * @param {"navigation" | "default"} type -
 * - `"navigation"`: Creates dynamic routing using Next.js Links. The `children` prop
 *   will be ignored in the `"items"` array.
 * - `"default"`: Does not navigate and renders the `children` of each tab.
 */

const UITab: FC<UITabsProps> = ({ type = 'default', children, ...rest }) => {
	if (!type) throw new Error('Type required');

	if (type === 'default') {
		return <StyledTabs $type={type} {...rest} />;
	}

	const { pathname, items } = rest as NavTabType;

	// manually get active key for navigation and refresh.
	const getActiveKey = () => {
		for (const item of items) {
			if (pathname?.endsWith(item.key) || pathname?.includes(item.key + '/')) {
				return item.key;
			}
		}

		return items[0]?.key || '';
	};

	return (
		<>
			<StyledTabs activeKey={getActiveKey()} $type={type} {...rest} />
			<StyledTabChildren>{children}</StyledTabChildren>
		</>
	);
};

UITab.displayName = 'Tabs';

export type { UITabsProps };
export default UITab;
