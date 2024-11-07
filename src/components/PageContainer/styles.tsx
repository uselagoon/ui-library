import styled from 'styled-components';
import darkBg from '../../images/bg_dark.jpg';
import lightBg from '../../images/bg_light.jpg';

export const StyledPageContainer = styled.div`
	min-height: 100dvh;
	margin: 0;
	background-image: url(${(props) => (props.theme.colorScheme === 'dark' ? darkBg : lightBg)});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	.content {
		padding-inline: 8.888vw;
		padding-block-end: 5rem;
	}
`;
