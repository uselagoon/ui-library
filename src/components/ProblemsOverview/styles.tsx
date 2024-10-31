import styled from 'styled-components';
import colors from '../../_util/colors';

export const StyledOverview = styled.div`
	width: 100%;
	margin-bottom: 24px;
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	.icon {
		.icon-status {
			font-size: 50px;
			margin-bottom: 9px;
			&.green {
				color: ${colors.green};
			}
			&.pink {
				color: ${colors.pink};
			}
			&.orange {
				color: ${colors.orange};
			}
		}
	}
	.overview-title {
		margin-bottom: 1.5625rem;
		.explainer {
			cursor: pointer;
			margin-left: 0.25rem;
		}
	}
`;

export const StyledProblemsList = styled.div`
	display: flex;
	gap: 1.5rem;
`;
