import {ActivityLogItemProps, default as ActivityLogItem} from './ActivityLogItem';
import Checkbox from "@/components/Checkbox";
import {useState} from "react";

type ActivityLogProps = {
	ActivityLogItems?:  ActivityLogItemProps[];
}

function ActivityLog({ActivityLogItems}: ActivityLogProps) {
	const [filteredItems, setFilteredItems] = useState(ActivityLogItems);
	const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(['All']));

	const filters: string[] = ['All'];
	ActivityLogItems?.map(activityData => (
		activityData.tags?.map(tag => (
			!filters.includes(tag) ? filters.push(tag) : null
		))
	));

	const filterList = () => (
		filters.map(filter => {
			return (
				<Checkbox id={filter} label={filter} className="my-2" checked={activeFilters.has(filter)} onCheckedChange={(checked) => handleFilter(filter, checked)} />
			)
		}));

	if (!filteredItems || filteredItems.length === 0) {
		return <div>No activity to display.</div>;
	}

	const handleFilter = (filter: string, checked: boolean | string) => {
		const newActiveFilters = new Set(activeFilters);

		if (filter === 'All') {
			if (checked) {
				setActiveFilters(new Set(['All']));
				setFilteredItems(ActivityLogItems);
			}
			return;
		}

		newActiveFilters.delete('All')
		if (checked) {
			newActiveFilters.add(filter);
		} else {
			newActiveFilters.delete(filter);
		}

		if (newActiveFilters.size === 0) {
			setActiveFilters(new Set(['All']));
			setFilteredItems(ActivityLogItems);
			return;
		}

		setActiveFilters(newActiveFilters);
		const newFilteredItems = ActivityLogItems?.filter(item => item.tags?.some(tag => newActiveFilters.has(tag)));
		setFilteredItems(newFilteredItems);
	}

	return (
		<div className="flex gap-8 justify-between">
			<div>
				{filteredItems.map(activityData => (
					<ActivityLogItem {...activityData} />
				))}
			</div>
			<div className="min-w-[300px]">
				<p>Filter</p>
				{filterList()}
			</div>
		</div>
	)
}

export default ActivityLog;
