/* eslint-disable max-lines */
'use client';

import { type FC, useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { DateInput } from './date-input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import type { JSX } from 'react/jsx-runtime'; // Import JSX to fix the undeclared variable error

export interface DateRangePickerProps {
	/** Click handler for applying the updates from DateRangePicker. */
	onUpdate?: (values: { range: DateRange; rangeCompare?: DateRange }) => void;
	/** Initial value for start date */
	initialDateFrom?: Date | string;
	/** Initial value for end date */
	initialDateTo?: Date | string;
	/** Initial value for start date for compare */
	initialCompareFrom?: Date | string;
	/** Initial value for end date for compare */
	initialCompareTo?: Date | string;
	/** Alignment of popover */
	align?: 'start' | 'center' | 'end';
	/** Option for locale */
	locale?: string;
	/** Option for showing compare feature */
	showCompare?: boolean;

	rangeText?: string;
}

const formatDate = (date: Date, locale = 'en-us'): string => {
	return date.toLocaleDateString(locale, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
};

const getDateAdjustedForTimezone = (dateInput: Date | string): Date => {
	if (typeof dateInput === 'string') {
		// Split the date string to get year, month, and day parts
		const parts = dateInput.split('-').map((part) => Number.parseInt(part, 10));
		// Create a new Date object using the local timezone
		// Note: Month is 0-indexed, so subtract 1 from the month part
		const date = new Date(parts[0], parts[1] - 1, parts[2]);
		return date;
	} else {
		// If dateInput is already a Date object, return it directly
		return dateInput;
	}
};

interface DateRange {
	from: Date;
	to: Date | undefined;
}

interface Preset {
	name: string;
	label: string;
}

// Define presets
const PRESETS: Preset[] = [
	{ name: 'today', label: 'Today' },
	{ name: 'yesterday', label: 'Yesterday' },
	{ name: 'last7', label: 'Last 7 days' },
	{ name: 'last14', label: 'Last 14 days' },
	{ name: 'last30', label: 'Last 30 days' },
	{ name: 'thisWeek', label: 'This Week' },
	{ name: 'lastWeek', label: 'Last Week' },
	{ name: 'thisMonth', label: 'This Month' },
	{ name: 'lastMonth', label: 'Last Month' },
];

/** The DateRangePicker component allows a user to select a range of dates */
export const DateRangePicker: FC<DateRangePickerProps> = ({
	initialDateFrom, // No default here, allow it to be undefined
	initialDateTo, // No default here, allow it to be undefined
	initialCompareFrom,
	initialCompareTo,
	onUpdate,
	align = 'end',
	locale = 'en-US',
	showCompare = true,
	rangeText = undefined,
	...rest
}): JSX.Element => {
	// Determine if initialDateFrom was explicitly provided
	const wasInitialDateFromProvided = initialDateFrom !== undefined;

	const [isOpen, setIsOpen] = useState(false);

	const [range, setRange] = useState<DateRange>(() => {
		if (wasInitialDateFromProvided) {
			const from = getDateAdjustedForTimezone(initialDateFrom as Date | string);
			const to = initialDateTo ? getDateAdjustedForTimezone(initialDateTo) : from;
			return { from, to };
		} else {
			// If no initialDateFrom, default to today internally for calendar component,
			// but the display will be "Select a date range" controlled by isDateRangeSelected.
			const today = new Date(new Date().setHours(0, 0, 0, 0));
			return { from: today, to: today };
		}
	});

	const [rangeCompare, setRangeCompare] = useState<DateRange | undefined>(() => {
		if (initialCompareFrom) {
			const from = new Date(new Date(initialCompareFrom).setHours(0, 0, 0, 0));
			const to = initialCompareTo ? new Date(new Date(initialCompareTo).setHours(0, 0, 0, 0)) : from;
			return { from, to };
		}
		return undefined;
	});

	// This state controls the display text in the trigger
	const [isDateRangeSelected, setIsDateRangeSelected] = useState(wasInitialDateFromProvided);

	// Refs to store the values when the date picker is opened
	const openedRangeRef = useRef<DateRange>();
	const openedRangeCompareRef = useRef<DateRange | undefined>();
	const openedIsDateRangeSelectedRef = useRef<boolean>(false);
	const hasAppliedChangesRef = useRef(false); // To track if "Update" was clicked

	const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined);
	const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' ? window.innerWidth < 960 : false);

	useEffect(() => {
		const handleResize = (): void => {
			setIsSmallScreen(window.innerWidth < 960);
		};
		window.addEventListener('resize', handleResize);
		// Clean up event listener on unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const getPresetRange = (presetName: string): DateRange => {
		const preset = PRESETS.find(({ name }) => name === presetName);
		if (!preset) throw new Error(`Unknown date range preset: ${presetName}`);

		const from = new Date();
		const to = new Date();
		const first = from.getDate() - from.getDay();

		switch (preset.name) {
			case 'today':
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'yesterday':
				from.setDate(from.getDate() - 1);
				from.setHours(0, 0, 0, 0);
				to.setDate(to.getDate() - 1);
				to.setHours(23, 59, 59, 999);
				break;
			case 'last7':
				from.setDate(from.getDate() - 6);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'last14':
				from.setDate(from.getDate() - 13);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'last30':
				from.setDate(from.getDate() - 29);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'thisWeek':
				from.setDate(first);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'lastWeek':
				from.setDate(from.getDate() - 7 - from.getDay());
				to.setDate(to.getDate() - to.getDay() - 1);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'thisMonth':
				from.setDate(1);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'lastMonth':
				from.setMonth(from.getMonth() - 1);
				from.setDate(1);
				from.setHours(0, 0, 0, 0);
				to.setDate(0);
				to.setHours(23, 59, 59, 999);
				break;
		}
		return { from, to };
	};

	const setPreset = (preset: string): void => {
		const newRange = getPresetRange(preset);
		setRange(newRange);
		setIsDateRangeSelected(true); // A preset selection means a date range is selected
		if (rangeCompare) {
			const newRangeCompare = {
				from: new Date(newRange.from.getFullYear() - 1, newRange.from.getMonth(), newRange.from.getDate()),
				to: newRange.to
					? new Date(newRange.to.getFullYear() - 1, newRange.to.getMonth(), newRange.to.getDate())
					: undefined,
			};
			setRangeCompare(newRangeCompare);
		}
	};

	const checkPreset = (): void => {
		for (const preset of PRESETS) {
			const presetRange = getPresetRange(preset.name);
			const normalizedRangeFrom = new Date(range.from);
			normalizedRangeFrom.setHours(0, 0, 0, 0);
			const normalizedPresetFrom = new Date(presetRange.from.setHours(0, 0, 0, 0));
			const normalizedRangeTo = new Date(range.to ?? 0);
			normalizedRangeTo.setHours(0, 0, 0, 0);
			const normalizedPresetTo = new Date(presetRange.to?.setHours(0, 0, 0, 0) ?? 0);

			if (
				normalizedRangeFrom.getTime() === normalizedPresetFrom.getTime() &&
				normalizedRangeTo.getTime() === normalizedPresetTo.getTime()
			) {
				setSelectedPreset(preset.name);
				return;
			}
		}
		setSelectedPreset(undefined);
	};

	useEffect(() => {
		checkPreset();
	}, [range]);

	const PresetButton = ({
		preset,
		label,
		isSelected,
	}: {
		preset: string;
		label: string;
		isSelected: boolean;
	}): JSX.Element => (
		<Button
			className={cn(isSelected && 'pointer-events-none')}
			variant="ghost"
			onClick={() => {
				setPreset(preset);
			}}
		>
			<>
				<span className={cn('pr-2 opacity-0', isSelected && 'opacity-70')}>
					<Check width={18} height={18} />
				</span>
				{label}
			</>
		</Button>
	);

	// Helper function to check if two date ranges are equal
	const areRangesEqual = (a?: DateRange, b?: DateRange): boolean => {
		if (!a || !b) return a === b; // If either is undefined, return true if both are undefined
		return a.from.getTime() === b.from.getTime() && (!a.to || !b.to || a.to.getTime() === b.to.getTime());
	};

	const handleClear = (): void => {
		// Reset range to a default internal state (e.g., today), but set isDateRangeSelected to false
		//@ts-ignore
		setRange({ from: undefined, to: undefined });
		setRangeCompare(undefined);
		setIsDateRangeSelected(false);
		setSelectedPreset(undefined); // Clear any selected preset
		hasAppliedChangesRef.current = true; // Mark that changes were applied (cleared)
		setIsOpen(false); // Close the popover
		//@ts-ignore
		onUpdate?.({ range: { from: undefined, to: undefined }, rangeCompare: undefined }); // Notify parent of clear
	};

	return (
		<Popover
			modal={true}
			open={isOpen}
			onOpenChange={(open: boolean) => {
				if (!open) {
					// Popover is closing
					if (!hasAppliedChangesRef.current) {
						// If changes were not applied via "Update" button, revert to stored state
						setRange(openedRangeRef.current || range);
						setRangeCompare(openedRangeCompareRef.current);
						setIsDateRangeSelected(openedIsDateRangeSelectedRef.current);
					}
					hasAppliedChangesRef.current = false; // Reset for next open
				} else {
					// Popover is opening, store the current state
					openedRangeRef.current = range;
					openedRangeCompareRef.current = rangeCompare;
					openedIsDateRangeSelectedRef.current = isDateRangeSelected;
					hasAppliedChangesRef.current = false; // Ensure it's false when opening
				}
				setIsOpen(open);
			}}
			{...rest}
		>
			<PopoverTrigger>
				<Button size={'lg'} variant="outline">
					<div className="text-right">
						<div className="py-1">
							{isDateRangeSelected ? (
								<div>{`${formatDate(range.from, locale)}${range.to != null ? ' - ' + formatDate(range.to, locale) : ''}`}</div>
							) : (
								<div>{rangeText ?? 'Select a date range'}</div>
							)}
						</div>
						{rangeCompare != null && (
							<div className="opacity-60 text-xs -mt-1">
								<>
									vs. {formatDate(rangeCompare.from, locale)}
									{rangeCompare.to != null ? ` - ${formatDate(rangeCompare.to, locale)}` : ''}
								</>
							</div>
						)}
					</div>
					<div className="pl-1 opacity-60 -mr-2 scale-125">
						{isOpen ? <ChevronUp width={24} /> : <ChevronDown width={24} />}
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent align={align} className="w-auto">
				<div className="flex py-2">
					<div className="flex">
						<div className="flex flex-col">
							<div className="flex flex-col lg:flex-row gap-2 px-3 justify-end items-center lg:items-start pb-4 lg:pb-0">
								{showCompare && (
									<div className="flex items-center space-x-2 pr-4 py-1">
										<Switch
											defaultChecked={Boolean(rangeCompare)}
											onCheckedChange={(checked: boolean) => {
												if (checked) {
													if (!range.to) {
														setRange((prevRange) => ({
															...prevRange,
															to: prevRange.from,
														}));
													}
													setRangeCompare({
														from: new Date(range.from.getFullYear(), range.from.getMonth(), range.from.getDate() - 365),
														to: range.to
															? new Date(range.to.getFullYear() - 1, range.to.getMonth(), range.to.getDate())
															: new Date(range.from.getFullYear() - 1, range.from.getMonth(), range.from.getDate()),
													});
												} else {
													setRangeCompare(undefined);
												}
											}}
											id="compare-mode"
										/>
										<Label htmlFor="compare-mode">Compare</Label>
									</div>
								)}
								<div className="flex flex-col gap-2">
									<div className="flex gap-2">
										<DateInput
											value={range.from}
											onChange={(date) => {
												const toDate = range.to == null || date > range.to ? date : range.to;
												setRange((prevRange) => ({
													...prevRange,
													from: date,
													to: toDate,
												}));
												setIsDateRangeSelected(true); // User manually picked a date
											}}
										/>
										<div className="py-1">-</div>
										<DateInput
											value={range.to}
											onChange={(date) => {
												const fromDate = date < range.from ? date : range.from;
												setRange((prevRange) => ({
													...prevRange,
													from: fromDate,
													to: date,
												}));
												setIsDateRangeSelected(true); // User manually picked a date
											}}
										/>
									</div>
									{rangeCompare != null && (
										<div className="flex gap-2">
											<DateInput
												value={rangeCompare?.from}
												onChange={(date) => {
													if (rangeCompare) {
														const compareToDate =
															rangeCompare.to == null || date > rangeCompare.to ? date : rangeCompare.to;
														setRangeCompare((prevRangeCompare) => ({
															...prevRangeCompare,
															from: date,
															to: compareToDate,
														}));
													} else {
														setRangeCompare({
															from: date,
															to: new Date(),
														});
													}
												}}
											/>
											<div className="py-1">-</div>
											<DateInput
												value={rangeCompare?.to}
												onChange={(date) => {
													if (rangeCompare && rangeCompare.from) {
														const compareFromDate = date < rangeCompare.from ? date : rangeCompare.from;
														setRangeCompare({
															...rangeCompare,
															from: compareFromDate,
															to: date,
														});
													}
												}}
											/>
										</div>
									)}
								</div>
							</div>
							{isSmallScreen && (
								<Select
									defaultValue={selectedPreset}
									onValueChange={(value) => {
										setPreset(value);
									}}
								>
									<SelectTrigger className="w-[180px] mx-auto mb-2">
										<SelectValue placeholder="Select..." />
									</SelectTrigger>
									<SelectContent>
										{PRESETS.map((preset) => (
											<SelectItem key={preset.name} value={preset.name}>
												{preset.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)}
							<div>
								<Calendar
									mode="range"
									onSelect={(value: { from?: Date; to?: Date } | undefined) => {
										if (value?.from != null) {
											setRange({ from: value.from, to: value?.to });
											setIsDateRangeSelected(true); // User selected dates from calendar
										} else {
											setIsDateRangeSelected(false);
										}
									}}
									selected={range}
									numberOfMonths={isSmallScreen ? 1 : 2}
									defaultMonth={new Date(new Date().setMonth(new Date().getMonth() - (isSmallScreen ? 0 : 1)))}
								/>
							</div>
						</div>
					</div>
					{!isSmallScreen && (
						<div className="flex flex-col items-end gap-1 pr-2 pl-6 pb-6">
							<div className="flex w-full flex-col items-end gap-1 pr-2 pl-6 pb-6">
								{PRESETS.map((preset) => (
									<PresetButton
										key={preset.name}
										preset={preset.name}
										label={preset.label}
										isSelected={selectedPreset === preset.name}
									/>
								))}
							</div>
						</div>
					)}
				</div>
				<div className="flex justify-end gap-2 py-2 pr-4">
					<Button onClick={handleClear} variant="ghost">
						Clear
					</Button>
					<Button
						onClick={() => {
							setIsOpen(false); // This will trigger onOpenChange, which will revert the state
						}}
						variant="ghost"
					>
						Cancel
					</Button>
					<Button
						onClick={() => {
							if (
								!areRangesEqual(range, openedRangeRef.current) ||
								!areRangesEqual(rangeCompare, openedRangeCompareRef.current) ||
								isDateRangeSelected !== openedIsDateRangeSelectedRef.current // Also check if the selection state changed
							) {
								onUpdate?.({ range, rangeCompare });
							}
							hasAppliedChangesRef.current = true; // Mark that changes were applied
							setIsOpen(false); // Close the popover
						}}
					>
						Update
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};

DateRangePicker.displayName = 'DateRangePicker';
