import React, { ReactNode } from 'react';

export const getCurrentPathIndex = (navLinks: ReactNode[], pathname: string): number => {
	return navLinks.findIndex((link) => {
		if (React.isValidElement(link) && link.props.href) {
			return pathname.startsWith(link.props.href);
		}
		return false;
	});
};
