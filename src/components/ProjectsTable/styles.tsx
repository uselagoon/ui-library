import { Table } from 'antd';
import styled from 'styled-components';

export const StyledTable = styled(Table)`
	border: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#000' : '#fff')};
	border-radius: 0;
	font-family: 'Open Sans', sans-serif !important;
	box-shadow: 2px 2px 8px 0px #ffffff40;
	margin-bottom: 2rem;
	.ant-table-thead {
		tr {
			th {
				background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#f8f8f2')};
				text-align: left;
				padding-left: 0.5rem;
				border: unset;
				border-bottom: 1px solid #868686;
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#f8f8f2' : 'initial')};
				font-size: 15px;
				line-height: 14px;
				font-weight: 600;
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
	tbody {
		background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#272822' : '#fff')};
		color: ${(props) => (props.theme.colorScheme === 'dark' ? '#f8f8f8' : '#272822')};

		tr > td {
			border-bottom: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#F8F8F2')} !important;
			border-right: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#F8F8F2')} !important;
			padding-left: 0.5rem !important;
			&:first-child {
				border-left: 2px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#868686' : '#F8F8F2')} !important;
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
