import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export const StyledFooter = styled.footer`
	padding: 7px 12px;
	width: 100%;
	min-height: 3.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	.icon-container {
		width: 114px;
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
		color: ${(props) => props.theme.UI.backgrounds.footer};
		transition: all 0.3s ease;
		padding: 0.5rem;
		&:hover {
			color: ${colors.lagoonBlue};
		}
		&:active {
			background-color: #78787853;
		}
	}
`;
