import { Input } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export const StyledInput = styled(Input)`
	&.ant-input {
		font-size: 0.75rem;
		line-height: 1.25rem;

		padding: 0.35rem 0.6rem;

		&.ant-input-sm {
			font-size: 0.65rem;
			line-height: 1.15rem;

			padding: 0.25rem 0.5rem;
		}

		&.ant-input-lg {
			font-size: 1rem;
			line-height: 1.5rem;
			padding: 0.5rem 0.75rem;
		}

		border-radius: 2px;
		border: 1px solid ${(props) => props.theme.UI.borders.box};
		background-color: ${(props) => props.theme.UI.backgrounds.input};

		&.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) {
			background-color: ${(props) => props.theme.UI.backgrounds.input};
		}

		&::placeholder {
			color: ${(props) => (props.theme.colorScheme === 'dark' ? colors.white : '#00000099')};
		}
		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				color: ${colors.white};
			`}
	}
`;
