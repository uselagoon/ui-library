import React, { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import pluginBridge from '@/_util/pluginBridge';

type Maintenance = {
	id: string;
	name: string;
	impact: string;
	shortLink: string;
	createdAt: Date;
	updatedAt: Date;
	startedAt: Date;
	resolvedAt: Date | null;
	scheduledFor: Date;
	scheduledUntil: Date;
	status: string;
}

type Incident = {
	id: string;
	name: string;
	impact: string;
	shortLink: string;
	createdAt: Date;
	updatedAt: Date;
	resolvedAt: Date;
	status: string;
}

type Maintenances = {
	Maintenances: Maintenance[];
}

type Incidents = {
	Incidents: Incident[];
}

export type MaintenanceData = {
	Maintenances: Maintenances;
	Incidents: Incidents;
	active?: boolean;
	title?: string;
	message?: string;
}

export default function MaintenanceBanner() {
	const [maintenanceData, setMaintenanceData] = useState<MaintenanceData | null>(null)

	useEffect(() => {
		const handler = (data?: MaintenanceData) => {
			if (data) {
				setMaintenanceData(data);
			}
		}

		const unsubscribe = pluginBridge.subscribe('maintenance:update', handler);
		return unsubscribe;
	}, [])

	return (
		<Alert>
			<AlertTitle>{maintenanceData?.title}</AlertTitle>
			<AlertDescription>{maintenanceData?.message}</AlertDescription>
		</Alert>
	);
}
