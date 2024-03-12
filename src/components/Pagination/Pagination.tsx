import React, { FC } from 'react';

import { PaginationProps, Pagination as AntPagination } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

const UIPagination: FC<
	Omit<
		PaginationProps,
		'defaultCurrent' | 'size' | 'simple' | 'showLessItems' | 'responsive' | 'pageSize' | 'pageSizeOptions'
	>
> = (props) => {
	return (
		<StyledPagination showSizeChanger defaultCurrent={1} locale={{ items_per_page: 'results / page' }} {...props} />
	);
};

const StyledPagination = styled(AntPagination)`
	&.ant-pagination {
		max-width: 99%;
		display: flex;
		background-color: transparent;

		li[tabIndex]:not(.ant-pagination-item-active) > a:not(.ant-pagination-item-link),
		.ant-pagination-item-link a,
		.ant-pagination-prev,
		.ant-pagination-next {
			${(props) =>
				props.theme.colorScheme === 'dark' &&
				css`
					border: 1px solid ${colors.gray};
				`}
		}

		li[tabIndex]:not(.ant-pagination-item-active) a,
		.ant-pagination-item-link,
		.ant-pagination-item-link .ant-pagination-item-container .ant-pagination-item-ellipsis {
			${(props) =>
				props.theme.colorScheme === 'dark' &&
				css`
					color: ${colors.white};
				`}
		}
		.ant-pagination-prev,
		.ant-pagination-next {
			${(props) =>
				props.theme.colorScheme === 'dark' &&
				css`
					button[disabled] {
						color: ${colors.gray};
					}
				`}
		}

		.ant-pagination-prev {
			margin-left: auto;
		}
		.ant-pagination-options {
			order: -1;

			.ant-select {
				.ant-select-dropdown {
					${(props) =>
						props.theme.colorScheme === 'dark' &&
						css`
							background-color: ${colors.cellGray};

							.ant-select-item.ant-select-item-option {
								color: #fff;
							}
							.ant-select-item.ant-select-item-option.ant-select-item-option-active {
								background-color: ${colors.gray};
							}
							.ant-select-item.ant-select-item-option.ant-select-item-option-selected {
								background-color: ${colors.gray};
							}
						`}
				}
				.ant-select-selector {
					&,
					& > * {
						${(props) =>
							props.theme.colorScheme === 'dark' &&
							css`
								background-color: ${colors.darkGray};
								color: ${colors.white};
							`}
					}

					input[type='search'] {
					}
					.ant-select-selection-item {
						&::before {
							content: '';
						}
					}
				}
			}
		}
	}
`;

UIPagination.displayName = 'Pagination';

export type { PaginationProps as UIPaginationProps };

export default UIPagination;
