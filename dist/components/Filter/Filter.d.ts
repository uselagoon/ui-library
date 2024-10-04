import React from 'react';
type SortType<T> = {
    value: T;
    label: string;
};
type FilterProps = {
    sortOptions?: SortType<string | number>[];
    selectOptions?: {
        options: SortType<string>[];
        state: {
            selectedState: unknown;
            setSelectedState: React.Dispatch<React.SetStateAction<unknown>>;
        };
    };
    searchOptions?: {
        state: {
            searchText: string;
            setSearchText: React.Dispatch<React.SetStateAction<string>>;
        };
    };
    showDateRange?: boolean;
};
declare const LagoonFilter: React.ForwardRefExoticComponent<FilterProps & React.RefAttributes<HTMLDivElement>>;
export default LagoonFilter;
export type { FilterProps as LagoonFilterProps };
