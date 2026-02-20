import { MaintenanceData } from "./Banner";

const now = new Date();

const addTime = (hours: number = 0, minutes: number = 0) => {
	return new Date(now.getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000)).toISOString();
};

export const maintenanceData: MaintenanceData = {
	Maintenances: [
		{
			id: 'completed-maint',
			name: 'Completed Maintenance - AMERICAS',
			status: 'scheduled',
			impact: 'maintenance',
			shortlink: 'https://stspg.io/example1',
			created_at: addTime(-50),
			updated_at: addTime(-48),
			started_at: addTime(-48),
			resolved_at: null,
			scheduled_for: addTime(-48),
			scheduled_until: addTime(-46),
			type: 'Maintenance',
		},
		{
			id: 'active-maint',
			name: 'Active Maintenance - APAC',
			status: 'scheduled',
			impact: 'maintenance',
			shortlink: 'https://stspg.io/example2',
			created_at: addTime(-24),
			updated_at: addTime(-1),
			started_at: addTime(0, -30),
			resolved_at: null,
			scheduled_for: addTime(0, -30),
			scheduled_until: addTime(2),
			type: 'Maintenance',
		},
		{
			id: 'upcoming-maint',
			name: 'Upcoming Maintenance - EMEA',
			status: 'scheduled',
			impact: 'maintenance',
			shortlink: 'https://stspg.io/example3',
			created_at: addTime(-24),
			updated_at: addTime(-1),
			started_at: addTime(0, 30),
			resolved_at: null,
			scheduled_for: addTime(0, 30),
			scheduled_until: addTime(24, 30),
			type: 'Maintenance',
		},
	],
	Incidents: [
		{
			id: 'jt359ccb2r3z',
			name: 'Public statement on CVE-2025-55182',
			status: 'monitoring',
			impact: 'none',
			shortlink: 'https://stspg.io/vgym8bybsn0n',
			created_at: '2025-12-05T01:08:22.000Z',
			updated_at: '2025-12-15T16:50:42.132Z',
			resolved_at: null,
			type: 'Incident',
		},
	],
	active: true,
};
