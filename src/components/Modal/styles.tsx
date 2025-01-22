import styled, { css } from 'styled-components';

export const ModalChildren = styled.section<{ $minHeight?: string }>`
	overflow: hidden;
	border-radius: 0;
	box-shadow: ${(props) =>
		props.theme.colorScheme === 'dark' ? '2px 2px 8px 0px #ffffff40' : '2px 2px 8px 0px #00000040'};
`;
