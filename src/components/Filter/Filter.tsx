import React, { forwardRef } from 'react';
import styled from 'styled-components';
import UISelect from '../Select';

import { Input } from 'antd';

const { Search } = Input;

type SortType<T> = {
	value: T;
	label: string;
};

type FilterProps = {
	sortOptions?: SortType<string | number>[];
	selectOptions?: {
		options: SortType<string | number>[];
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

const InternalFilter: React.ForwardRefRenderFunction<HTMLDivElement, FilterProps> = (
	{ selectOptions, searchOptions, sortOptions, showDateRange = false },
	ref,
) => {
	return (
		<StyledFilter ref={ref}>
			<div className="select-container">
				<div className="results">
					<UISelect
						defaultOpen={false}
						placeholder="Results per page"
						options={selectOptions?.options}
						selectedState={selectOptions?.state.selectedState}
						setSelectedState={(val) => {
							if (selectOptions?.state) {
								selectOptions.state.setSelectedState(val);
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
			</div>
			<div className="searchBar">
				<StyledSearch
					placeholder="Search"
					size="small"
					onChange={(e) => {
						if (searchOptions?.state) {
							searchOptions.state.setSearchText(e.target.value);
						}
					}}
					value={searchOptions?.state.searchText}
					addonAfter={null}
					variant="borderless"
				/>
			</div>
		</StyledFilter>
	);
};

const StyledFilter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 26px;
	.select-container {
		display: flex;
		gap: 5px;
	}
`;

const StyledSearch = styled(Search)`
	&,
	& > * {
		background-color: transparent;
	}
	.ant-input-wrapper {
		border-bottom: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#6b6b6e' : '#0c0c0c')};
		background-color: transparent;
		& > * {
			background-color: transparent;
		}
		.ant-input-affix-wrapper {
			padding-inline: 0;
		}
		.ant-input-group-addon {
			button {
				user-select: none;
				pointer-events: none;
				background: transparent;
				border: none;
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#6b6b6e' : '#0c0c0c')} !important;
				.ant-btn-icon {
					span[role='img'] {
						font-size: 22px;
					}
				}
			}
		}
		input {
			padding-left: 0;
			color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fafafa' : '#0c0c0c')};
			&::placeholder {
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#6b6b6e' : '#0c0c0c')};
			}
		}
	}
`;
const LagoonFilter = forwardRef<HTMLDivElement, FilterProps>(InternalFilter);

LagoonFilter.displayName = 'LagoonFilter';

export default LagoonFilter;

export type { FilterProps as LagoonFilterProps };
