export type Maintenance = {
    id: string;
    name: string;
    impact: string;
    shortlink: string;
    created_at: string;
    updated_at: string;
    started_at: string;
    resolved_at: string | null;
    scheduled_for: string;
    scheduled_until: string;
    status: string;
    type: 'Maintenance';
};
export type Incident = {
    id: string;
    name: string;
    impact: string;
    shortlink: string;
    created_at: string;
    updated_at: string;
    resolved_at: string | null;
    status: string;
    type: 'Incident';
};
export type MaintenanceData = {
    Maintenances: Maintenance[];
    Incidents: Incident[];
    active: boolean;
};
export default function MaintenanceBanner(): import("react/jsx-dev-runtime").JSX.Element | null;
//# sourceMappingURL=Banner.d.ts.map