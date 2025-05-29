import * as a from "react";
import { ChevronRight as n, ChevronLeft as s } from "lucide-react";
import { DayPicker as c } from "react-day-picker";
import { cn as e } from "./index.es54.js";
import { buttonVariants as r } from "./index.es14.js";
function p({ className: b, classNames: o, showOutsideDays: d = !0, ...t }) {
  return /* @__PURE__ */ a.createElement(
    c,
    {
      showOutsideDays: d,
      className: e("lib:p-3", b),
      classNames: {
        months: "lib:flex lib:flex-col sm:lib:flex-row lib:gap-2",
        month: "lib:flex lib:flex-col lib:gap-4",
        caption: "lib:flex lib:justify-center lib:pt-1 lib:relative lib:items-center lib:w-full",
        caption_label: "lib:text-sm lib:font-medium",
        nav: "lib:flex lib:items-center lib:gap-1",
        nav_button: e(
          r({ variant: "outline" }),
          "lib:size-7 lib:bg-transparent lib:p-0 lib:opacity-50 hover:lib:opacity-100"
        ),
        nav_button_previous: "lib:absolute lib:left-1",
        nav_button_next: "lib:absolute lib:right-1",
        table: "lib:w-full lib:border-collapse lib:space-x-1",
        head_row: "lib:flex",
        head_cell: "lib:text-muted-foreground lib:rounded-md lib:w-8 lib:font-normal lib:text-[0.8rem]",
        row: "lib:flex lib:w-full lib:mt-2",
        cell: e(
          "lib:relative lib:p-0 lib:text-center lib:text-sm focus-within:lib:relative focus-within:lib:z-20 [&:has([aria-selected])]:lib:bg-accent [&:has([aria-selected].day-range-end)]:lib:rounded-r-md",
          t.mode === "range" ? "[&:has(>.day-range-end)]:lib:rounded-r-md [&:has(>.day-range-start)]:lib:rounded-l-md first:[&:has([aria-selected])]:lib:rounded-l-md last:[&:has([aria-selected])]:lib:rounded-r-md" : "[&:has([aria-selected])]:lib:rounded-md"
        ),
        day: e(
          r({ variant: "ghost" }),
          "lib:size-8 lib:p-0 lib:font-normal aria-selected:lib:opacity-100"
        ),
        day_range_start: "lib:day-range-start aria-selected:lib:bg-primary aria-selected:lib:text-primary-foreground",
        day_range_end: "lib:day-range-end aria-selected:lib:bg-primary aria-selected:lib:text-primary-foreground",
        day_selected: "lib:bg-primary lib:text-primary-foreground hover:lib:bg-primary hover:lib:text-primary-foreground focus:lib:bg-primary focus:lib:text-primary-foreground",
        day_today: "lib:bg-accent lib:text-accent-foreground",
        day_outside: "lib:day-outside lib:text-muted-foreground aria-selected:lib:text-muted-foreground",
        day_disabled: "lib:text-muted-foreground lib:opacity-50",
        day_range_middle: "aria-selected:lib:bg-accent aria-selected:lib:text-accent-foreground",
        day_hidden: "lib:invisible",
        ...o
      },
      components: {
        IconLeft: ({ className: i, ...l }) => /* @__PURE__ */ a.createElement(s, { className: e("lib:size-4", i), ...l }),
        IconRight: ({ className: i, ...l }) => /* @__PURE__ */ a.createElement(n, { className: e("lib:size-4", i), ...l })
      },
      ...t
    }
  );
}
export {
  p as Calendar
};
