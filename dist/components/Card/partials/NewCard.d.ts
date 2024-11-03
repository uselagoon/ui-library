import { FC, ReactNode } from 'react';
export type NewEnvironmentType = {
    /**
     * An array of React nodes representing each step in the environment.
     */
    steps: ReactNode[];
    /**
     * callback to fire env creation mutation with all required form item/val object
     */
    onCreateEnvironment: (formItems: Record<string, unknown>) => Promise<any>;
    loading: boolean;
    /**
     * required form fields to validate and allow step change
     */
    requiredFormItems?: string[];
    /**
     * table/list view
     */
    renderType?: 'card' | 'listItem';
};
export declare const NewCard: FC<NewEnvironmentType>;
