import styled, { css } from 'styled-components';

export const StyledStatistic = styled.div<{ $fullWidth?: boolean }>`
	border: 1px solid #333;
	border-radius: 7px;
	padding: 24px 23px;
	display: flex;
	flex-direction: column;

	.statistic-element,
	.ant-statistic-content {
		font-size: 1.2rem;
	}
	${(props) =>
		props.$fullWidth
			? css`
					width: 100%;
				`
			: css`
					min-width: 20.25rem;
					max-width: max-content;
				`}
`;
