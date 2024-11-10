import React, { forwardRef, useEffect, useRef } from 'react';
import UISelect from '../Select';
import { StyledFilter, StyledSearch } from './styles';

type SortType<T> = {
	value: T;
	label: string;
};

type FilterProps = {
	sortOptions?: {
		options: SortType<string | number | null | undefined>[];
		selectedState: unknown;
		setSelectedState: React.Dispatch<React.SetStateAction<unknown>>;
	};
	selectOptions?: {
		options: SortType<string | number | null | undefined>[];
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

const InternalFilter: React.ForwardRefRenderFunction<HTMLDivElement, FilterProps> = (
	{ children, selectOptions, searchOptions, sortOptions, loadingSkeleton = false },
	ref,
) => {
	const inputRef = useRef<any>();

	useEffect(() => {
		// Focus only if searchText is truthy on initial mount
		if (searchOptions?.searchText) {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}
	}, []);

	return (
		<StyledFilter ref={ref}>
			<div className="select-container">
				{selectOptions ? (
					<div className="results">
						<UISelect
							disabled={loadingSkeleton}
							defaultOpen={false}
							placeholder="Results per page"
							options={selectOptions?.options}
							selectedState={selectOptions?.selectedState ?? undefined}
							setSelectedState={(val) => {
								selectOptions.setSelectedState(val);
							}}
						/>
					</div>
				) : null}

				{sortOptions ? (
					<div className="sortBy">
						<UISelect
							disabled={loadingSkeleton}
							defaultOpen={false}
							placeholder="Sort by"
							selectedState={sortOptions?.selectedState ?? undefined}
							options={sortOptions.options}
							setSelectedState={(val) => {
								sortOptions.setSelectedState(val);
							}}
						/>
					</div>
				) : null}

				{children ? children : null}
			</div>
			<div className="searchBar">
				<StyledSearch
					ref={inputRef}
					placeholder="Search"
					size="small"
					onChange={(e) => {
						if (searchOptions) {
							searchOptions.setSearchText(e.target.value);
						}
					}}
					value={searchOptions?.searchText}
					addonAfter={null}
					variant="borderless"
				/>
			</div>
		</StyledFilter>
	);
};

const LagoonFilter = forwardRef<HTMLDivElement, FilterProps>(InternalFilter);

LagoonFilter.displayName = 'LagoonFilter';

export default LagoonFilter;

export type { FilterProps as LagoonFilterProps };
