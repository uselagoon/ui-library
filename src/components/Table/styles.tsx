import { Empty, Table } from 'antd';
import styled, { css } from 'styled-components';

export const TableSummary = styled.div`
	display: block;
	padding-block: 17px;
`;

export const StyledBaseTable = styled(Table)<{
	$variant: 'default' | 'alternate';
	$lastRowBordered: boolean;
	$withBg?: boolean;
	$hasSummary?: boolean;
}>`
	border-radius: 0;
	font-family: 'Open Sans', sans-serif !important;
	box-shadow: ${(props) =>
		props.theme.colorScheme === 'dark' ? '2px 2px 8px 0px #ffffff40' : '2px 2px 8px 0px #00000040'};

	margin-bottom: ${(props) => (props.$hasSummary ? '0.5rem' : '2rem')};
	.ant-table {
		background-color: transparent;

		&.ant-table-empty {
			.ant-table-placeholder,
			.ant-table-placeholder > *:hover {
				background-color: transparent !important;
			}
			.ant-empty-image {
				height: max-content;
				.anticon {
					font-size: 38px;
					svg path {
						fill: rgb(253, 151, 31);
					}
				}
			}
			.ant-table-cell {
				border: none !important;
			}

			.ant-empty-description {
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#F8F8F2' : '#222222')};
			}
		}
	}
	.ant-table-thead {
		tr {
			th {
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#F8F8F2' : '#222222')};
				text-align: left;
				padding-left: 0.5rem;
				border: unset;
				font-size: 15px;
				line-height: 14px;
				font-weight: 600;
				border-bottom: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#75715e' : '#dadad2')} !important;
				background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#75715E' : '#FAFAFA')};

				&.ant-table-column-has-sorters {
					.ant-table-column-sorters > .ant-table-column-sorter > .ant-table-column-sorter-inner {
						color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#000')};
					}
				}

				&.ant-table-column-has-sorters:hover {
					background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#717171' : '#d9dbdf')};
				}

				&.ant-table-column-sort,
				&.ant-table-column-sort:hover {
					background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#717171' : '#d9dbdf')};
				}

				&.custom-sorted {
					background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#717171' : '#d9dbdf')};
				}

				${(props) => {
					return (
						props.$variant === 'alternate' &&
						css`
							background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#F2F2F2')};
							color: ${(props) => (props.theme.colorScheme === 'dark' ? '#F2F2F2' : 'initial')};
							border-bottom: 1px solid #868686;
						`
					);
				}}

				&:before {
					display: none;
				}
			}
			&:first-child > *:first-child,
			&:first-child > *:last-child {
				border-start-start-radius: 0 !important;
				border-start-end-radius: 0 !important;
			}
		}
	}
	.ant-table-footer {
		background-color: transparent;
	}

	tfoot.ant-table-summary {
		background-color: transparent;

		.summary {
			display: block;
			padding: 17px 13px;
		}
	}

	tbody {
		color: ${(props) => (props.theme.colorScheme === 'dark' ? '#F8F8F2' : '#222222')};

		${(props) => {
			return (
				(props.$variant === 'alternate' || props.$withBg) &&
				css`
					background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#272822' : '#fff')};
					color: ${(props) => (props.theme.colorScheme === 'dark' ? '#f8f8f8' : '#272822')};
				`
			);
		}}

		tr > td {
			border-bottom: 1px solid #75715e !important;
			border-right: 1px solid #75715e;

			padding-left: 0.5rem !important;
			&:first-child {
				border-left: 1px solid #75715e;
			}
			&.ant-table-cell-row-hover {
				background: ${(props) => (props.theme.colorScheme === 'dark' ? '#32332c' : '#F8F8F2')} !important;
			}

			&.ant-table-column-sort {
				background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#717171' : '#d9dbdf')};
				&.ant-table-cell-row-hover {
					background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#717171' : '#d9dbdf')} !important;
				}
			}
			&.custom-sorted {
				background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#717171' : '#d9dbdf')};
			}
			border-bottom: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#dadad2')} !important;
			border-right: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#dadad2')} !important;
			padding-left: 0.5rem !important;
			&:first-child {
				border-left: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#dadad2')} !important;
			}
			${(props) => {
				return (
					props.$variant === 'alternate' &&
					css`
						&.ant-table-cell-row-hover {
							background: ${(props) => (props.theme.colorScheme === 'dark' ? '#32332c' : '#F8F8F2')} !important;
						}
					`
				);
			}}
		}

		${(props) =>
			props.$lastRowBordered &&
			css`
				tr:last-of-type > td:not(:first-child):not(:last-child) {
					border: unset;
				}
				tr:last-of-type > td:first-child {
					border-right: unset;
				}
			`}
	}

	.highlighted {
		color: ${(props) => props.theme.UI.texts.primary};
		background-color: ${(props) => props.theme.UI.highlights.selection};
	}
`;

export const ActionWrap = styled.section`
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	> * {
		cursor: pointer;
		font-size: 1.1875rem;
	}
`;

export const EmptyAction = styled.span`
	width: 1.1875rem;
`;

export const StyledEmptyTableDescription = styled(Empty)`
	padding-block: 2.5rem;
`;
