import { default as React } from 'react';
import { Accordion } from '../ui/accordion';
type AccordionProps = React.ComponentProps<typeof Accordion> & {
    items: {
        id: string;
        trigger: React.ReactNode;
        content: React.ReactNode;
    }[];
    showArrows?: boolean;
    showSeparators?: boolean;
    secondaryText?: boolean;
};
export default function UIAccordion({ items, showArrows, secondaryText, showSeparators, ...rest }: AccordionProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Accordion.d.ts.map