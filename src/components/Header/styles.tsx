import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

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
	gap: 10px;
	list-style: none;
	font-family: 'Open sans', sans-serif;
	font-size: 14px;
	line-height: 22px;
	font-weight: 600;
	margin-left: auto;
	margin-right: 1rem;
`;
export const StyledLink = styled.div`
	cursor: pointer;
	font-weight: 400;
	line-height: 22px;
	font-family: 'Roboto';
	padding: 20px;
	font-size: 14px;
	color: ${(props) => props.theme.UI.texts.nav};
`;

export const StyledHeader = styled.footer`
	padding-inline: 40px;
	padding-block: 3px;
	width: 100%;
	min-height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;

	background: ${(props) => props.theme.UI.backgrounds.header};
	box-shadow: 0px 2px 8px 0px rgba(240, 241, 242, 0.2);

	${(props) =>
		props.theme.colorScheme === 'dark' &&
		css`
			background-color: #222;
			box-shadow: -2px 2px 2px 0px #3333331a;
		`};
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
	cursor: pointer;
	.theme-icon {
		svg {
			stroke: ${(props) => props.theme.UI.backgrounds.footer};
			transition: all 0.3s ease;
			&:active {
				stroke: ${colors.lagoonBlue};
			}
		}
		transition: all 0.3s ease;
		padding: 0.5rem;

		&:active {
			background-color: #78787853;
		}
	}
`;
