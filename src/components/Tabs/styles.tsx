import { Tabs } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export const StyledTabs = styled(Tabs)<{ $type: 'navigation' | 'default' }>`
	&.ant-tabs {
		div[role='tabpanel'] {
			min-height: 100vmax;
			${(props) =>
				props.$type === 'navigation' &&
				css`
					display: none;
					height: 0 !important;
					min-height: 0 !important;
				`}
		}
		div[role='tab'] {
			transition: all 0.25s ease !important;
			background-color: ${(props) => props.theme.UI.backgrounds.navTabs};
			a {
				color: unset;
				display: inline-block;
				padding: 12px;
				width: 100%;
				text-align: center;
				transition: all 0.25s ease;
				text-decoration: none;
				&:hover {
					text-shadow: 0 0 0.25px #1677ff;
					color: #1677ff;
				}
			}
		}
		div[role='tablist'] {
			margin-bottom: 0;
			&::before {
				display: none;
			}
			.ant-tabs-nav-list {
				display: flex;
				gap: 0.5rem;
				> div {
					min-width: 7.5rem;
					display: flex;
					justify-content: center;
				}
				.ant-tabs-ink-bar {
					background-color: ${colors.lagoonBlue};
				}
			}
			& > div {
				> .ant-tabs-nav-list {
					> .ant-tabs-tab {
						padding: 0;
						> div[role='tab'] {
							width: 100%;
						}
					}
				}
			}
			${(props) =>
				props.$type !== 'navigation' &&
				css`
					& > div {
						> .ant-tabs-nav-list {
							> .ant-tabs-tab {
								display: inline-block;
								> div[role='tab'] {
									text-align: center;
									width: 100%;
									padding: 12px 0;
								}
							}
						}
					}
				`}
		}

		& .ant-tabs-nav-wrap {
			border: none;
		}
		div[role='tabpanel'] {
			background-color: ${(props) => props.theme.UI.backgrounds.navTabs} !important;
		}
	}
`;

export const StyledTabChildren = styled.section`
	box-shadow: 2px 2px 4px 0px #69696933;
	background-color: ${(props) => props.theme.UI.backgrounds.navTabs};
	color: ${(props) => props.theme.UI.texts.primary};
	padding-top: 1.5rem;
	padding-inline: 1rem;
	min-height: 27.1875rem;
	max-height: max-content;
	padding-bottom: 2.5rem;
`;
