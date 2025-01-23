import styled from 'styled-components';
import darkBg from '../../images/bg_dark.jpg';
import lightBg from '../../images/bg_light.jpg';

export const StyledPageContainer = styled.div`
	min-height: 100dvh;
	margin: 0;
	background-color: #f2f2f2;
	.content {
		padding-inline: 8.888vw;
		padding-block-end: 5rem;
		margin-top: 3rem;
	}
	img.logo {
		display: block;
		height: 42px;
		width: auto;
	}
`;
