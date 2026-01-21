import type { Meta, StoryObj } from '@storybook/react';
import ChangeLogContainer from '../components/ChangeLog';
import { sampleActivityData } from '../components/ChangeLog/sampleData';

const meta: Meta<typeof ChangeLogContainer> = {
    component: ChangeLogContainer,
    title: 'Components/ChangeLog',
    tags: ['autodocs'],
};

type Story = StoryObj<typeof ChangeLogContainer>;

export const Default: Story = {
    args: {
        fallbackData: sampleActivityData,
    },
};

export const Empty: Story = {
    args: {
        fallbackData: [],
    },
};

export const SingleItem: Story = {
    args: {
        fallbackData: [sampleActivityData[0]],
    },
};

export const NoTags: Story = {
    args: {
        fallbackData: sampleActivityData.map(item => ({ ...item, tags: undefined })),
    },
};

export const NoDescription: Story = {
    args: {
        fallbackData: sampleActivityData.map(item => ({ ...item, description: '' })),
    },
};

export default meta;


