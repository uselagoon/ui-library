import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
import UISelect from '../Select';
import { StyledFilter, StyledSearch } from './styles';

type SortType<T> = {
	value: T;
	label: string;
};

type FilterProps = {
	sortOptions?: SortType<string | number>[];
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

const InternalFilter: React.ForwardRefRenderFunction<HTMLDivElement, FilterProps> = (
	{ children, selectOptions, searchOptions, sortOptions, loadingSkeleton = false, showDateRange = false },
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
				<div className="results">
					<UISelect
						disabled={loadingSkeleton}
						defaultOpen={false}
						placeholder="Results per page"
						options={selectOptions?.options}
						selectedState={selectOptions?.selectedState}
						setSelectedState={(val) => {
							if (selectOptions?.selectedState) {
								selectOptions.setSelectedState(val);
							}
						}}
					/>
				</div>

				<div className="sortBy">
					<UISelect defaultOpen={false} placeholder="Sort by" options={sortOptions} />
				</div>

				{showDateRange ? (
					<div className="dateRange">
						<UISelect
							disabled={loadingSkeleton}
							defaultOpen={false}
							placeholder="View by date range"
							options={[
								{ value: '1', label: 'Select option #1' },
								{ value: '2', label: 'Select option #2' },
								{ value: '3', label: 'Select option #3' },
							]}
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
