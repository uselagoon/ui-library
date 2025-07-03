import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Story } from '@storybook/addon-docs/blocks';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: 'Components/Accordion',
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    name: "Single Accordion",
    render: () => (
        <div className="w-md mx-auto">
            <Accordion
                type="single"
                collapsible
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus neque, egestas id felis et, mollis tempor enim. Quisque accumsan, ligula viverra posuere sagittis, nulla nibh porta libero, ultrices fermentum nibh leo non justo. Aenean porta tristique dolor, quis convallis leo tempus eu. Curabitur dolor enim, tristique ornare sem eget, pulvinar eleifend quam.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};

export const Multiple: Story = {
    name: "Multiple Accordions",
    render: () => (
        <div className="w-md mx-auto">
            <Accordion
                type="multiple"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus neque, egestas id felis et, mollis tempor enim. Quisque accumsan, ligula viverra posuere sagittis, nulla nibh porta libero, ultrices fermentum nibh leo non justo. Aenean porta tristique dolor, quis convallis leo tempus eu. Curabitur dolor enim, tristique ornare sem eget, pulvinar eleifend quam.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Product Specifications</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus neque, egestas id felis et, mollis tempor enim. Quisque accumsan, ligula viverra posuere sagittis, nulla nibh porta libero, ultrices fermentum nibh leo non justo. Aenean porta tristique dolor, quis convallis leo tempus eu. Curabitur dolor enim, tristique ornare sem eget, pulvinar eleifend quam.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Product Reviews</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus neque, egestas id felis et, mollis tempor enim. Quisque accumsan, ligula viverra posuere sagittis, nulla nibh porta libero, ultrices fermentum nibh leo non justo. Aenean porta tristique dolor, quis convallis leo tempus eu. Curabitur dolor enim, tristique ornare sem eget, pulvinar eleifend quam.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};

export const Styled: Story = {
    name: "Styled Accordions",
    render: () => (
        <div className="w-md mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem
                    value="item-1"
                >
                    <AccordionTrigger
                        className="px-4 text-[#4474e0] hover:bg-neutral-800 data-[state=open]:text-[#4474e0] bg-neutral-900"
                    >
                        Product Information
                    </AccordionTrigger>
                    <AccordionContent
                        className="bg-black p-4 text-neutral-300 rounded-md"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus neque, egestas id felis et, mollis tempor enim. Quisque accumsan, ligula viverra posuere sagittis, nulla nibh porta libero, ultrices fermentum nibh leo non justo.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                >
                    <AccordionTrigger
                        className="px-4 text-[#4474e0] hover:bg-neutral-800 data-[state=open]:text-[#4474e0] bg-neutral-900"
                    >
                        Product Specifications
                    </AccordionTrigger>
                    <AccordionContent className="bg-black p-4 text-neutral-300 rounded-md">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tellus neque, egestas id felis et, mollis tempor enim. Quisque accumsan, ligula viverra posuere sagittis, nulla nibh porta libero, ultrices fermentum nibh leo non justo.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ),
};

export default meta;
