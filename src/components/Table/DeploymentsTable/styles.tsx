import { Tooltip } from 'antd';
import styled from 'styled-components';
import colors from '../../../_util/colors';
import { Colors } from '../../..';
import { lagoonColors } from '../../../_util/lagoonColors';

export const StatusContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;
	.buildstep {
		color: #000;
	}
`;

export const BuildStepTooltip = styled(Tooltip)`
	max-width: 200px;
`;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	a {
		color: ${(props) => (props.theme.colorScheme === 'dark' ? '#f8f8f8' : '#272822')};
		&:hover {
			color: ${Colors.lagoonBlue};
		}
	}
	.bulk-link {
		margin-left: auto;
		padding-inline: 0.25rem;
		background-color: ${colors.lagoonBlue};
		transition: all 0.25s ease;
		&:hover {
			background-color: ${lagoonColors.lagoonSecondary.light};
		}
		a {
			color: #fff;
		}
	}
`;
