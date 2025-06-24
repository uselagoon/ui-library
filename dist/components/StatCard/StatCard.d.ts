import { ReactNode } from 'react';
type StatCardprops = {
    title: string;
    content: ReactNode;
    type?: 'default' | 'withIcon' | 'stat';
};
export declare const cardVariants: (props?: ({
    type?: "default" | "withIcon" | "stat" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export default function StatCard({ type, title, content }: StatCardprops): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=StatCard.d.ts.map