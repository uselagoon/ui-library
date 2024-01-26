import React, { forwardRef } from "react";
import styled from "styled-components";
import UISelect from "../Select";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

type SortType<T> = {
  value: T;
  label: string;
};

type FilterProps = {
  resultOptions?: SortType<string | number>[];
  sortOptions?: SortType<string>[];
};

// TODO: actual behavior

const InternalFilter: React.ForwardRefRenderFunction<
  HTMLDivElement,
  FilterProps
> = ({ sortOptions, resultOptions }, ref) => {
  return (
    <StyledFilter ref={ref}>
      <div className="select-container">
        <div className="results">
          <UISelect
            defaultOpen={false}
            placeholder="Results per page"
            options={[
              { value: "1", label: "Select option #1" },
              { value: "2", label: "Select option #2" },
              { value: "3", label: "Select option #3" },
            ]}
          />
        </div>

        <div className="sortBy">
          <UISelect
            defaultOpen={false}
            placeholder="Sort by"
            options={[
              { value: "1", label: "Select option #1" },
              { value: "2", label: "Select option #2" },
              { value: "3", label: "Select option #3" },
            ]}
          />
        </div>

        <div className="dateRange">
          <UISelect
            defaultOpen={false}
            placeholder="View by date range"
            options={[
              { value: "1", label: "Select option #1" },
              { value: "2", label: "Select option #2" },
              { value: "3", label: "Select option #3" },
            ]}
          />
        </div>
      </div>

      <div className="searchBar">
        <Search
          placeholder="Search"
          allowClear
          size="small"
          onSearch={() => {}}
        />
      </div>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .select-container {
    display: flex;
    gap: 1rem;
  }
`;
const LagoonFilter = forwardRef<HTMLDivElement, FilterProps>(InternalFilter);

LagoonFilter.displayName = "LagoonFilter";

export default LagoonFilter;

export type { FilterProps as LagoonFilterProps };
