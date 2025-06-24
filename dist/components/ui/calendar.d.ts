import { DayButton, DayPicker } from 'react-day-picker';
import { Button } from './button';
import * as React from 'react';
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}): import("react/jsx-dev-runtime").JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>): import("react/jsx-dev-runtime").JSX.Element;
export { Calendar, CalendarDayButton };
//# sourceMappingURL=calendar.d.ts.map