import styled, { css } from 'styled-components';

export const StyledStatistic = styled.div<{ $fullWidth?: boolean }>`
	border: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#5b5b5b' : '#333')};

	border-radius: 7px;
	padding: 24px 23px;
	display: flex;
	flex-direction: column;
	gap: 10px;

	${(props) =>
		props.$fullWidth
			? css`
					width: 100%;
				`
			: css`
					min-width: 20.25rem;
					max-width: max-content;
				`}

	.ant-statistic-title {
		font-size: 12px;
		font-family: 'ArabicPro-Regular';
		color: #868686;
		line-height: 22px;
		margin-bottom: unset;
	}

	.ant-statistic-content,
	.statistic-element {
		font-family: 'ArabicPro-Regular';
		font-size: 1.5rem;
		line-height: 1.65rem;
		text-transform: none;
		color: ${(props) => props.theme.UI.texts.primary};
	}
	&.ant-statistic {
		font-family: 'AmericaMono-Regular', sans-serif;
		text-transform: uppercase;

		&.ant-statistic > .ant-skeleton > .ant-skeleton-content > h3 {
			height: 2rem;
			background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#616161' : '#F3F3F3')};
			margin-top: -1rem;
		}
	}
`;
