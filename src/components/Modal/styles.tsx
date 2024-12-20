import { Button, Modal } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export const ModalFooterButton = styled(Button)`
	border-radius: 0 !important;
	&.ant-btn:disabled {
		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				background-color: ${colors.gray};
			`}
	}
`;

export const ModalChildren = styled.section<{ $minHeight?: string }>`
	overflow: hidden;
	border-radius: 0;
	box-shadow: ${(props) =>
		props.theme.colorScheme === 'dark' ? '2px 2px 8px 0px #ffffff40' : '2px 2px 8px 0px #00000040'};
	.ant-modal-content {
		border-radius: 0;
		padding: 0;
		background-color: ${(props) => props.theme.UI.backgrounds.modal};

		.ant-modal-footer {
			border-radius: 0;
			padding: 10px 22px;
			display: flex;
			justify-content: space-between;
		}
		.ant-modal-header {
			border-radius: 0;
			padding: 5px 22px;
			background-color: inherit;
			margin-top: 0;
			.ant-modal-title {
				color: ${(props) => props.theme.UI.texts.primary};
			}
		}
		.ant-modal-body {
			border-block: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#75715e' : '#dadad2')};
			padding: 20px 24px;
			color: ${(props) => props.theme.UI.texts.primary};
			min-height: 200px;

			${(props) =>
				props.$minHeight &&
				css`
					min-height: ${props.$minHeight};
				`}
		}
		.ant-modal-close {
			width: 22px;
			height: 22px;
			font-size: 28px;
			transform: translate(0.5rem, 0);
			& span {
				width: 100%;
				height: 100%;
				display: inline-block;

				svg {
					color: ${(props) => props.theme.UI.texts.primary};
					width: 100%;
					height: 100%;
				}
			}
		}
	}
`;

export const StyledModal = styled(Modal)<{ $width?: number | string }>`
	min-width: ${({ $width }) => ($width ? (typeof $width === 'number' ? `${$width}px` : $width) : '900px')};
	@media (max-width: 1200px) {
		min-width: initial;
	}
`;
