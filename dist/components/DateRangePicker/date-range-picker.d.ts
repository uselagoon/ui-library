import { FC } from 'react';
export interface DateRangePickerProps {
    /** Click handler for applying the updates from DateRangePicker. */
    onUpdate?: (values: {
        range: DateRange;
        rangeCompare?: DateRange;
    }) => void;
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
interface DateRange {
    from: Date;
    to: Date | undefined;
}
/** The DateRangePicker component allows a user to select a range of dates */
export declare const DateRangePicker: FC<DateRangePickerProps>;
export {};
//# sourceMappingURL=date-range-picker.d.ts.map