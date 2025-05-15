import React from 'react';
import { NextLinkType } from '../typings/nextLink';
export declare const LinkContext: React.Context<NextLinkType | undefined>;
export declare const LinkProvider: React.FC<{
    linkComponent: NextLinkType;
    children: React.ReactNode;
}>;
export declare const useLinkComponent: () => NextLinkType;
