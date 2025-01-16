import styled, { css } from 'styled-components';
import Button from '../../Button';
import Head2 from '../../Heading/H2';
import Text from '../../Text';
import { Form } from 'antd';
import colors from '../../../_util/colors';
import TextArea from 'antd/es/input/TextArea';

export const ModalButton = styled(Button)`
	background: transparent !important;
	border: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#000')};
	color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#000')} !important;
	border-radius: 0;
`;

export const ModalHeader = styled(Head2)`
	margin-bottom: 0 !important;
	margin-top: 10px !important;
`;

export const ModalText = styled(Text)`
	font-size: 11px !important;
	transform: translateY(-5px) !important;
`;

export const ModalForm = styled(Form)`
	.ant-row.ant-form-item-row {
		flex-direction: column;
		margin-bottom: 3.5rem !important;
		&:first-child {
			margin-top: 2rem;
		}
	}
	.ant-col {
		text-align: justify !important;
	}
`;

export const Highlighted = styled.span`
	font-weight: 600;
	color: ${colors.lagoonBlue};
`;

export const SShSummary = styled.div`
	display: block;
`;

export const StyledTextArea = styled(TextArea)`
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
			color: ${(props) => (props.theme.colorScheme === 'dark' ? colors.white : '#00000099')} !important;
		}
		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				color: ${colors.white};
			`}
	}
`;
