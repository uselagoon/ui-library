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
	margin-bottom: ${(props) => (props.$hasSummary ? '0.5rem' : '2rem')};
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
		height: 35px;
		min-width: 35px;
		display: inline-flex;
		justify-content: center;
	}
`;

export const EmptyAction = styled.span`
	width: 1.1875rem;
`;

export const StyledEmptyTableDescription = styled(Empty)`
	padding-block: 2.5rem;
`;
