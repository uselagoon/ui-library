import type { Meta, StoryObj } from '@storybook/react';
import ActivityLog from '../components/ActivityLog';
import { sampleActivityData } from '../components/ActivityLog/sampleData';

const meta: Meta<typeof ActivityLog> = {
    component: ActivityLog,
    title: 'Components/ActivityLog',
    tags: ['autodocs'],
};

type Story = StoryObj<typeof ActivityLog>;

export const Default: Story = {
    args: {
        ActivityLogItems: sampleActivityData,
    },  
}
export default meta;


