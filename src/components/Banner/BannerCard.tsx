import { AlertCircle, CloudCog } from "lucide-react"
import { Badge } from "../ui/badge"
import { Incident, Maintenance } from "./Banner"

export default function BannerCard({ bannerItem }: { bannerItem: Incident | Maintenance }) {

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Incident':
                return <AlertCircle className="w-5 h-5 text-[var(--badge-danger-bg)]" />
            case 'Maintenance':
                return <CloudCog className="w-5 h-5 text-[var(--badge-lagoon-bg)]" />
            default:
                return <CloudCog className="w-5 h-5 text-[var(--badge-lagoon-bg)]" />
        }
    }
    
    const getMaintenanceLabel = (item: Maintenance) => {
        const now = new Date();
        const start = new Date(item.scheduled_for);
        const diffMinutes = Math.round((start.getTime() - now.getTime()) / 60000);
        if (diffMinutes > 0) {
            return (
                <span>
                    <span className="font-bold">Upcoming - </span>
                    {truncateName(item.name)}
                    <span className="text-[var(--muted-foreground)]"> (Starts in {diffMinutes} minutes)</span>
                </span>
            );
        }
        return truncateName(item.name);
    }

    const formatDate = (item: Maintenance) => {
        const start = new Date(item.scheduled_for);
        const end = new Date(item.scheduled_until);
        
        const options: Intl.DateTimeFormatOptions = { 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };

        if (start.toDateString() === end.toDateString()) {
            return (
                <span>
                    {start.toLocaleString(undefined, options)} — {end.toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit'})}
                </span>
            );
        }
        return start.toLocaleString(undefined, options) + ' — ' + end.toLocaleString(undefined, options);
    }

    const truncateName = (text: string) => {
		if (text.length > 70) {
			return text.slice(0, 70) + '...';
		}
		return text;
	}

    return (
        <div className="w-[90%] mx-auto border bg-[var(--card)] rounded-xl mb-4 px-4 py-2">
            <div className="flex items-start gap-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bannerItem.type === 'Incident' ? 'bg-[var(--badge-danger-bg)]/20' : 'bg-[var(--badge-lagoon-bg)]/20'}`}>
                    {getTypeIcon(bannerItem.type)}
                </div>
                <div className="flex flex-col w-[90%] gap-2">
                    <div className="flex gap-4 items-center">
                        <h4 className="text-md font-medium">
                            {bannerItem.type === 'Maintenance' 
                                ? getMaintenanceLabel(bannerItem as Maintenance) 
                                : truncateName(bannerItem.name)}
                        </h4>
                        <Badge className="ml-auto" variant={bannerItem.type === 'Incident' ? 'danger' : 'lagoon'}>{bannerItem.type}</Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className='grid grid-cols-2 text-sm'>
                            <div className="flex items-end gap-2">
                                <span className="text-[var(--muted-foreground)] text-xs uppercase">Status </span>
                                <span className="capitalize">{bannerItem.status}</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-[var(--muted-foreground)] text-xs uppercase">Impact </span>
                                <span className="capitalize">{bannerItem.impact}</span>
                            </div>
                        </div>
                        {bannerItem.type === 'Maintenance' && (
                            <div className="w-full text-sm">
                                <span className="text-[var(--muted-foreground)] text-xs uppercase">Scheduled </span>
                                <span>{formatDate(bannerItem)}</span>
                            </div>
                        )}
                        <div className="w-full">
                            {bannerItem.shortlink && (
                                <a href={bannerItem.shortlink} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--badge-lagoon-bg)] hover:text-[var(--badge-lagoon-hover)]">
                                    More details
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}