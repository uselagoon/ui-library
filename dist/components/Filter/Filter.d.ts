import React from 'react';
type SortType<T> = {
    value: T;
    label: string;
};
type FilterProps = {
    sortOptions?: {
        options: SortType<string | number>[];
        selectedState: unknown;
        setSelectedState: React.Dispatch<React.SetStateAction<unknown>>;
    };
    selectOptions?: {
        options: SortType<string | number>[];
        selectedState: unknown;
        setSelectedState: React.Dispatch<React.SetStateAction<unknown>>;
    };
    searchOptions?: {
        searchText: string;
        setSearchText: React.Dispatch<React.SetStateAction<string>>;
    };
    showDateRange?: boolean;
    loadingSkeleton?: boolean;
    children?: React.ReactNode;
};
declare const LagoonFilter: React.ForwardRefExoticComponent<FilterProps & React.RefAttributes<HTMLDivElement>>;
export default LagoonFilter;
export type { FilterProps as LagoonFilterProps };
