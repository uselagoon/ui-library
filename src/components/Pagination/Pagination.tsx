import React, { FC } from 'react';

import { PaginationProps, Pagination as AntPagination } from 'antd';

const UIPagination: FC<
	Omit<
		PaginationProps,
		'defaultCurrent' | 'size' | 'simple' | 'showLessItems' | 'responsive' | 'pageSizeOptions' | 'showSizeChanger'
	> & {
		showSizeSelector?: boolean;
	}
> = ({ showSizeSelector = false, ...props }) => {
	return (
		<AntPagination
			showSizeChanger={showSizeSelector}
			defaultCurrent={1}
			locale={{ items_per_page: 'results / page' }}
			{...props}
		/>
	);
};

UIPagination.displayName = 'Pagination';

export type { PaginationProps as UIPaginationProps };

export default UIPagination;
