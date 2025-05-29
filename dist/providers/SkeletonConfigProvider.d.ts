import { ReactNode } from 'react';
/**
 * A global config provider for react-loading-skeleton
 *
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - The content to render within the skeleton wrapper.
 * @param {string} [props.baseColor] - The base color of the skeleton. Optional, can be overridden.
 * @param {string} [props.highlightColor] - The highlight color of the skeleton. Optional, can be overridden.
 */
declare const SkeletonConfigProvider: ({ children, baseColor, highlightColor, }: {
    children: ReactNode;
    baseColor?: string;
    highlightColor?: string;
}) => import("react/jsx-dev-runtime").JSX.Element;
export default SkeletonConfigProvider;
//# sourceMappingURL=SkeletonConfigProvider.d.ts.map