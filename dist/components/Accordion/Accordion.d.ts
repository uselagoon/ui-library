import { default as React } from 'react';
import { Accordion } from '../ui/accordion';
type AccordionProps = React.ComponentProps<typeof Accordion> & {
    items: {
        id: string;
        trigger: React.ReactNode;
        content: React.ReactNode;
    }[];
};
export default function UIAccordion({ items, ...rest }: AccordionProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=Accordion.d.ts.map