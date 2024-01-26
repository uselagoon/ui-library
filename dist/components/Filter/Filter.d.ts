import React from "react";
type SortType<T> = {
    value: T;
    label: string;
};
type FilterProps = {
    resultOptions?: SortType<string | number>[];
    sortOptions?: SortType<string>[];
};
declare const LagoonFilter: React.ForwardRefExoticComponent<FilterProps & React.RefAttributes<HTMLDivElement>>;
export default LagoonFilter;
export type { FilterProps as LagoonFilterProps };
