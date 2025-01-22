import styled from 'styled-components';

export const StyledTip = styled.section`
	border: 1px solid ${(props) => props.theme.UI.borders.box};
	max-width: 30.6875rem;
	border-radius: 4px;
	padding: 8px 14px;
	background-color: ${(props) => (props.theme.colorScheme === 'dark' ? '#3c3d37' : '#c6c7c1')};
`;
export const TipIcon = styled.section`
	float: left;
	margin-right: 8px;

	color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#000')};
	&::after {
		clear: both;
	}
`;
export const TipContent = styled.section`
	line-height: 22.5px;
	font-size: 16px;
	color: ${(props) => props.theme.UI.texts.primary};
`;
