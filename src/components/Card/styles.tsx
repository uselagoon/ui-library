import { Card } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';
import { Colors } from '../..';
import { EllipsisOutlined } from '@ant-design/icons';

const sharedCardStyles = css`
	width: 23.75rem;
	height: 15.25rem;
	background-color: ${(props) => props.theme.UI.backgrounds.lagoonCard};
	color: ${(props) => props.theme.UI.texts.primary};

	box-shadow: ${(props) =>
		props.theme.colorScheme === 'dark' ? '3px 3px 6px 1px #8686864D;' : '2px 2px 4px 0px #69696933'};
	${(props) =>
		props.theme.colorScheme === 'dark' &&
		css`
			border: 1px solid ${(props) => props.theme.UI.borders.card};
		`}
`;

export const LoadingCard = styled(Card)`
	&.ant-card {
		cursor: unset;
		${sharedCardStyles}
		border: ${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
		
		1px solid ${(props) => props.theme.UI.borders.card};
	`};
		overflow: hidden;
		.ant-card-head,
		.ant-card-body,
		.ant-card-actions > li > span > span[role='img'] {
			color: ${(props) => props.theme.UI.texts.primary};
		}

		.ant-card-body {
			.ant-skeleton {
				.ant-skeleton-content > ul > li {
					background-color: ${(props) => props.theme.UI.backgrounds.selection};
					+ li {
						margin-block-start: 20px;
					}
				}
			}
		}
		.ant-card-actions {
			li {
				width: max-content !important;
				border-inline-end: none;
				&:first-child {
					margin-left: auto;
				}
			}
		}
	}
`;

export const StyledCard = styled(Card)`
	${sharedCardStyles}
	background-color: ${(props) => props.theme.UI.backgrounds.lagoonCard};
	color: ${(props) => props.theme.UI.texts.primary};

	&.ant-card {
		cursor: pointer;
		overflow: hidden;
		border-radius: 5px;
		.ant-card-head,
		.ant-card-body,
		.ant-card-actions > li > span > span[role='img'] {
			color: ${(props) => props.theme.UI.texts.primary};
		}

		.ant-card-actions {
			li {
				width: max-content !important;
				border-inline-end: none;
				&:first-child {
					margin-left: auto;
				}
			}
		}

		.ant-card-actions > li > span > span[role='img']:hover {
			color: ${Colors.lagoonBlue};
		}

		.ant-card-head {
			padding-left: 3.1875rem;
			font-family: 'Roboto', sans-serif;
			font-weight: bold;
			font-size: 1rem;
			line-height: 1.5rem;
			.ant-card-extra {
				color: ${(props) => props.theme.UI.texts.primary};
			}
		}

		.ant-card-extra {
			display: flex;
			gap: 10px;
			> * {
				cursor: pointer;
			}
		}

		.ant-card-body {
			padding: 0;
			min-height: 9.375rem;
			border-top: 1px solid ${(props) => props.theme.UI.borders.card};
			border-bottom: 1px solid ${(props) => props.theme.UI.borders.card};
			border-radius: 0;
			& > .lagoon-label {
				translate: 0 -3.5rem;
			}
			& > *:not(.lagoon-label) {
				padding-left: 3.1875rem;
			}
		}

		.ant-card-actions {
			background-color: transparent;
			height: 2.5rem;
			border: none;
			display: flex;
			> li {
				flex: 1;
				margin-left: 0 !important;

				&:first-child {
					margin-left: 30px !important;
				}
				&:not(:last-child) {
					border-right: 1px solid ${(props) => props.theme.UI.borders.box};
				}
				[role='img'] {
					svg {
						font-size: 22px;
					}
				}
			}
		}
	}
`;

export const StyledNewCard = styled(Card)`
	display: flex;
	place-content: center;
	place-items: center;
	${sharedCardStyles}
	border-left: inherit;
	border: ${(props) =>
		props.theme.colorScheme === 'dark' &&
		css`
		
		1px solid ${(props) => props.theme.UI.borders.card};
	`};
`;

export const PinSection = styled.div`
	font-size: 0.875rem;
	line-height: 1.375rem;
	font-family: 'ArabicPro-Regular', sans-serif;
	border: 1px solid ${(props) => props.theme.UI.borders.box};
	padding: 4px 15px;
	box-shadow: 0px 2px 0px 0px #00000004;
	border-radius: 2px;
	cursor: pointer;
	transition:
		color 0.3s ease,
		border 0.3s ease;
	&:hover {
		color: ${colors.lagoonBlue};
		border: 1px solid ${colors.lagoonBlue};
	}
`;

export const StyledEnvPartial = styled.div`
	padding-left: 3.1875rem;
	.lagooncard-project {
		display: flex;
		max-height: 2.5rem;
		flex-direction: column;
		.project-name {
			text-decoration: underline;
		}
		span:nth-child(odd) {
			font-size: 0.625rem;
			line-height: 0.625rem;
			font-family: 'AmericaMono-Regular', sans-serif;
		}
		span:nth-child(even) {
			font-size: 0.875rem;
			line-height: 1.375rem;
			font-family: 'ArabicPro-Regular', sans-serif;
			max-width: 100%;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-bottom: 0.25rem;
		}
		span.region {
			text-transform: uppercase;
		}
		span.type {
			text-transform: capitalize;
		}
	}
`;
export const StyledProjectPartial = styled.div`
	padding-left: 3.1875rem;
`;

export const StyledMoreActionsIcon = styled(EllipsisOutlined)`
	color: initial;
	transition: color 0.3s ease;
	&:hover {
		color: ${colors.lagoonBlue};
	}
`;
