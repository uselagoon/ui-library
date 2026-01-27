import type { Meta, StoryObj } from '@storybook/react';
import ChangeFeedContainer from '../components/ChangeFeed';
import { sampleActivityData } from '../components/ChangeFeed/sampleData';

const meta: Meta<typeof ChangeFeedContainer> = {
    component: ChangeFeedContainer,
    title: 'Components/ChangeFeed',
    tags: ['autodocs'],
};

type Story = StoryObj<typeof ChangeFeedContainer>;

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


