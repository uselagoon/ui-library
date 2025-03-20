import { Breadcrumb } from 'antd';
import styled, { css } from 'styled-components';

import colors from '../../_util/colors';

export const StyledBreadcrumb = styled(Breadcrumb)<{ $defaultMargins?: boolean }>`
	&.ant-breadcrumb {
		font-size: 1.2rem;
		line-height: 25px;

		li,
		span,
		a {
			transition: all 0.25s ease;
			color: ${(props) => props.theme.UI.texts.secondary};
		}
		& a:hover {
			background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#0000000f' : colors.lighterGray)};
		}

		${(props) =>
			!props.$defaultMargins &&
			css`
				li.ant-breadcrumb-separator {
					margin-inline-start: 1.5rem;
					margin-inline-end: 0.5rem;
				}
				li.ant-breadcrumb-separator:nth-child(1) {
					margin-inline-start: 8px;
					margin-inline-end: 8px;
				}

				li.ant-breadcrumb-separator:nth-child(3) {
					margin-inline-start: 8px;
					margin-inline-end: 8px;
				}
			`};

		li.ant-breadcrumb-separator:nth-last-child(2) {
			color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	position: relative;

	&[data-active='active'] > *:last-child {
		color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
		text-decoration: none !important;
	}

	span.decorator {
		left: 0;
		font-size: 13px;
		font-weight: bolder;
		color: ${colors.lagoonBlue} !important;
		top: -115%;
		position: absolute;
		pointer-events: none;
		user-select: none;
		text-transform: uppercase;
		text-decoration: none !important;
		border-bottom: none !important;
	}
`;

export const WithCopy = styled.div`
	height: 1rem;
	pointer-events: all;
	&[data-active='active'] {
		a {
			color: ${(props) => (props.theme.colorScheme === 'light' ? colors.texts.primary.light : colors.white)};
		}
	}
	.copy {
		position: absolute;
		left: calc(100% + 0.25rem);
		top: calc(100% - 0.65rem);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		pointer-events: all;

		span {
			transform: scale(0.9);
			color: ${colors.lagoonBlue};
		}
	}
`;
