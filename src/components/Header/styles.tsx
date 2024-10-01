import styled from 'styled-components';
import colors from '../../_util/colors';
import { Dropdown } from 'antd';

export const StyledAvatar = styled.div<{ $bgcolor: string | null }>`
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	height: 5rem;
	width: 5rem;
	border-radius: 50%;
	display: grid;
	place-items: center;
	overflow: hidden;
	background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : 'transparent')};

	img {
		object-fit: contain;
		object-position: center top;
		display: inline-block;
		height: auto;
		width: 5rem;
	}
`;

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: 1rem;
	position: relative;
`;

export const StyledNavWrapper = styled.nav`
	display: flex;
	list-style: none;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	line-height: 22px;
	font-weight: 600;
	& > *:hover > a {
		color: ${colors.lagoonBlue};
	}
`;

export const StyledLine = styled.span`
	transition: all 0.25s ease;
	display: inline-block;
	position: absolute;
	border: 2px solid ${colors.lagoonBlue};
	bottom: -4px;
	left: 0px;
	color: ${colors.lagoonBlue};
`;

export const StyledLink = styled.div`
	cursor: pointer;
	font-weight: 400;
	line-height: 22px;
	font-family: 'Roboto';
	padding: 20px;
	font-size: 14px;

	transition: all 0.25s ease;
	&.active {
		a {
			color: ${colors.lagoonBlue};
		}
	}
	&:hover {
		background-color: #78787853;
	}

	&,
	& > a {
		transition: all 0.25s ease;
	}
	& > a,
	& > a:link,
	& > a:visited {
		color: ${(props) => props.theme.UI.texts.nav};
	}
	& > a:hover {
		color: ${(props) => (props.theme.colorScheme === 'dark' ? colors.lagoonBlue : '')};
	}

	&:active > a {
		color: #184cbc;
	}
`;

export const StyledAvatarBubble = styled.div<{ $bgColor: string }>`
	background-color: ${(props) => props.$bgColor};
	border-radius: 50%;
	height: 24px;
	width: 24px;
	min-width: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 0.5rem;
	font-size: 0.75rem;
`;
export const StyledAvatarImage = styled.img`
	border-radius: 50%;
	height: 24px;
	width: 24px;
	object-fit: cover;
	object-position: 50% 50%;
	display: inline-block;
	margin-right: 0.5rem;
`;

export const StyledUserInfo = styled.div`
	font-family: 'Roboto';
	font-weight: 400;
	line-height: 22px;
	font-size: 14px;
	display: flex;
	align-items: center;
	user-select: none;
	span {
		color: ${(props) => props.theme.UI.texts.nav};
	}
	.user-name {
		transition: all 0.25s ease;
	}
`;

export const StyledUserDropdown = styled(Dropdown)`
	cursor: pointer;
	height: 68px;
	transition: all 0.25s ease;
	&:hover > .user-name {
		color: ${colors.lagoonBlue};
	}
`;

export const StyledHeader = styled.header`
	padding-inline: 40px;
	padding-block: 3px;
	width: 100%;
	min-height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	box-shadow: 0px 8px 8px -1px #f0f1f233;
	background: ${(props) => props.theme.UI.backgrounds.header};

	#user_dropdown_container {
		.ant-dropdown {
			ul {
				width: max-content;
				text-align: center;
				transform: translate(30px, -20px);
				font-family: 'Roboto';
				border: ${(props) => (props.theme.colorScheme === 'dark' ? '1px solid #f0f1f233' : 'initial')};
				background: ${(props) => props.theme.UI.backgrounds.header};
				&,
				& > * {
					color: ${(props) => props.theme.UI.texts.nav};
					transition: inherit;
				}
				li {
					padding-inline: 20px;
					&[role='separator'] {
						background: ${(props) => (props.theme.colorScheme === 'dark' ? colors.cellGray : '')};
					}
					&:hover {
						color: ${(props) => (props.theme.colorScheme === 'dark' ? colors.lagoonBlue : '')};
					}

					> * {
						transition: all 0.25s ease !important;
					}
					a,
					a:link,
					a:visited,
					a:active {
						color: ${(props) => props.theme.UI.texts.nav};
					}
					a:hover {
						color: ${(props) => (props.theme.colorScheme === 'dark' ? colors.lagoonBlue : '')};
					}
				}
			}
		}
	}
	.icon-container {
		min-width: 114px;
		height: 42px;
		display: flex;
		justify-content: center;
		align-items: center;
		svg,
		.icon svg {
			width: 100%;
			height: 100%;
			max-height: 42px;
		}
	}
`;
export const ThemeSwitcher = styled.section`
	font-size: 22px;
	width: 56px;
	height: 62px;
	margin-left: 1rem;
	cursor: pointer;
	.theme-icon {
		width: 56px;
		height: 62px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		svg {
			stroke: ${(props) => props.theme.UI.backgrounds.footer};
			transition: all 0.25s ease;
			&:active {
				stroke: ${colors.lagoonBlue};
			}
		}
		&:hover {
			svg {
				stroke: ${colors.lagoonBlue};
			}
		}
		transition: all 0.25s ease;
		padding: 0.5rem;

		&:active {
			background-color: #78787853;
		}
	}
`;
