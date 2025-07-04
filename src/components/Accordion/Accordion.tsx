import React from 'react';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

type AccordionProps = React.ComponentProps<typeof Accordion> & {
	items: {
		id: string;
		trigger: React.ReactNode;
		content: React.ReactNode;
	}[];
};

export default function UIAccordion({ items, ...rest }: AccordionProps) {
	return (
		<Accordion {...rest}>
			{items.map((item) => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
