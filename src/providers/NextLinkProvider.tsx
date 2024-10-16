import React, { createContext, useContext } from 'react';

const LinkContext = createContext<React.ComponentType<{ href: string; children: React.ReactNode }> | undefined>(
	undefined,
);

export const LinkProvider: React.FC<{
	linkComponent: React.ComponentType<{ href: string; children: React.ReactNode }>;
	children: React.ReactNode;
}> = ({ linkComponent, children }) => {
	return <LinkContext.Provider value={linkComponent}>{children}</LinkContext.Provider>;
};

export const useLinkComponent = () => {
	const context = useContext(LinkContext);
	if (!context) {
		throw new Error('useLinkComponent must be used within a LinkProvider');
	}
	return context;
};
