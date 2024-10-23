import { Tooltip } from 'antd';
import styled from 'styled-components';

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
	max-width: 160px;
`;

export const LinkContainer = styled.div`
	a {
		color: initial;
	}
`;
