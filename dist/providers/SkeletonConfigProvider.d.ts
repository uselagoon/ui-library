import { ReactNode } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
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
    baseColor?: string | undefined;
    highlightColor?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default SkeletonConfigProvider;
