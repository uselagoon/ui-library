import React from 'react';
import { Decorator } from '@storybook/react';

import { LinkProvider } from '../../src/providers/NextLinkProvider';

const withNextLink: Decorator = (StoryFn) => {
	// consumers of the library pass in actual React/Next.js links
	const FakeLink = function ({ children }) {
		return (
			<a className="peer/menu-button cursor-pointer flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground">
				{children}
			</a>
		);
	};
	return (
		<LinkProvider linkComponent={FakeLink as any}>
			<StoryFn />
		</LinkProvider>
	);
};
export default withNextLink;
