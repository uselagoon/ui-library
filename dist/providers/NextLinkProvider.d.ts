import React from 'react';
export declare const LinkProvider: React.FC<{
    linkComponent: React.ComponentType<{
        href: string;
        children: React.ReactNode;
    }>;
    children: React.ReactNode;
}>;
export declare const useLinkComponent: () => React.ComponentType<{
    href: string;
    children: React.ReactNode;
}>;
