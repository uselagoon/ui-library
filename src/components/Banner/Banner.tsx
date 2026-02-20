import { useEffect, useState } from 'react';
import pluginBridge from '@/_util/pluginBridge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Button } from '../ui/button';
import { ChevronDown, Info, X } from 'lucide-react';
import BannerCard from './BannerCard';

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
}

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
}

export type MaintenanceData = {
	Maintenances: Maintenance[];
	Incidents: Incident[];
	active: boolean;
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

	if (!maintenanceData) return null;
	
	const maintenances = maintenanceData.Maintenances ?? [];
	const incidents = maintenanceData.Incidents ?? [];
	const filteredMaintenances = maintenances.filter(maintenance => {
		if (maintenance.status !== 'scheduled') return true;

		const start = new Date(maintenance.scheduled_for).getTime();
		const end = new Date(maintenance.scheduled_until).getTime();
		const now = Date.now();
		const hour = 60 * 60 * 1000;

		return (start - now) < hour && end > now;
	}).sort((a, b) => {
		return new Date(a.scheduled_for).getTime() - new Date(b.scheduled_for).getTime();
	});

	if (filteredMaintenances.length === 0 && incidents.length === 0) {
		return null;
	}
	const bannerItems = [
		...incidents.map(i => ({ ...i, type: 'Incident' as const })),
		...filteredMaintenances.map(m => ({ ...m, type: 'Maintenance' as const }))
	];

	return (
		<Collapsible className="w-full max-w-xl mx-auto border-x border-b rounded-lg bg-[var(--background)]">
			<div className="pt-1.5 pb-2 px-3">
				<div className="flex items-center justify-between">
					<div className="flex gap-2 items-center">
						<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--badge-warning-bg)]/25">
							<Info className="w-5 h-5 text-[var(--badge-warning-bg)]" />
						</div>
						<div>
							<h4 className="text-md font-medium">Active Service Disruptions</h4>
							<CollapsibleTrigger className='flex items-end gap-2'>
								<p className="text-sm text-[var(--muted-foreground)] mt-0.5">
									{incidents.length + filteredMaintenances.length} active issue{incidents.length + filteredMaintenances.length !== 1 ? 's' : ''}
								</p>
								<ChevronDown className="w-5 h-5 text-[var(--muted-foreground)] hover:text-[var(--foreground)]" />
							</CollapsibleTrigger>
						</div>
					</div>
					<div className="justify-items-start">
						<Button className="text-xs size-6" variant="outline" onClick={() => setMaintenanceData(null)}><X className='w-4 h-4' /></Button>
					</div>
				</div>
			</div>
			<CollapsibleContent className='mt-2'>
				{bannerItems.map((bannerItem) => (
					<BannerCard key={bannerItem.id} bannerItem={bannerItem} />
				))}
			</CollapsibleContent>
		</Collapsible>
	);
}
