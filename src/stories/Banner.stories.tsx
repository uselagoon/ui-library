import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { default as Banner } from '../components/Banner';
import pluginBridge from '../_util/pluginBridge';
import type { MaintenanceData } from '../components/Banner/Banner';
import { maintenanceData } from '../components/Banner/storyData';

const meta: Meta<typeof Banner> = {
	component: Banner,
	title: 'Components/Banner',
	tags: ['autodocs'],
};

type Story = StoryObj<typeof Banner>;

const emitMaintenanceData = (data: MaintenanceData) => {
	setTimeout(() => {
		pluginBridge.publish('maintenance:update', data);
	}, 100);
};

export const Default: Story = {
	render: () => {
		emitMaintenanceData(maintenanceData);
		return <Banner />;
	},
};

export const WithIncident: Story = {
	render: () => {
		emitMaintenanceData({
			Maintenances: [],
			Incidents: maintenanceData.Incidents,
			active: true,
		});
		return <Banner />;
	},
};

export const WithScheduledMaintenance: Story = {
	render: () => {
		emitMaintenanceData({
			Maintenances: maintenanceData.Maintenances,
			Incidents: [],
			active: true,
		});
		return <Banner />;
	},
};

export default meta;
