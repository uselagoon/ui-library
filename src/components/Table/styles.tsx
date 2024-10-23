import { Table } from 'antd';
import styled, { css } from 'styled-components';

export const StyledBaseTable = styled(Table)`
	border: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#000' : '#fff')};
	border-radius: 0;
	font-family: 'Open Sans', sans-serif !important;
	/* box-shadow: 2px 2px 8px 0px #ffffff40; */
	box-shadow: ${(props) =>
		props.theme.colorScheme === 'dark' ? '2px 2px 8px 0px #ffffff40' : '2px 2px 8px 0px #00000040'};

	margin-bottom: 2rem;

	.ant-table {
		background-color: transparent;

		&.ant-table-empty {
			.ant-table-thead {
				display: none;
			}
			.ant-table-cell {
				background-color: transparent !important;
			}
			.ant-table-placeholder {
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
				border-bottom: 1px solid #75715e;
				background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#75715E' : '#FAFAFA')};

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
	tbody {
		color: ${(props) => (props.theme.colorScheme === 'dark' ? '#F8F8F2' : '#222222')};

		tr > td {
			/* border-bottom: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#F8F8F2')} !important;
			border-right: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#F8F8F2')} !important; */

			border-bottom: 1px solid #75715e !important;
			border-right: 1px solid #75715e;

			padding-left: 0.5rem !important;
			&:first-child {
				/* border-left: 1px solid ${(props) =>
					props.theme.colorScheme === 'dark' ? '#868686' : '#F8F8F2'} !important; */
				border-left: 1px solid #75715e;
			}
			&.ant-table-cell-row-hover {
				background: ${(props) => (props.theme.colorScheme === 'dark' ? '#32332c' : '#F8F8F2')} !important;
			}
		}
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
