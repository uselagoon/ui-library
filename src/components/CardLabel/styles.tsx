import styled, { css } from 'styled-components';
import { colorMap } from './CardLabel';
import colors from '../../_util/colors';

export const StyledLabel = styled.div<{
	$currentColor: (typeof colorMap)[keyof typeof colorMap];
}>`
	transform: rotate(90deg);
	text-transform: uppercase;
	min-width: 100px;
	max-width: 300px;
	width: 100%;
	transform-origin: calc(23px + 0%) 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto-medium', sans-serif;
	font-weight: 500;
	line-height: 30px;
	font-size: 20px;
	color: #222;
	user-select: none;
	${(props) =>
		props.$currentColor === '#000' &&
		css`
			color: ${colors.white};
		`}
	max-height: 23px;
	background-color: ${(props) => props.$currentColor};
	span {
		display: inline-block;
		transform: rotate(-180deg);
	}
`;

export const StyledHorizontalLabel = styled.div<{
	$currentColor: (typeof colorMap)[keyof typeof colorMap];
}>`
	text-transform: uppercase;
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	line-height: 20px;
	border-radius: 2px;
	font-size: 12px;
	color: #222;
	user-select: none;
	${(props) =>
		props.$currentColor === '#000' &&
		css`
			color: ${colors.white};
		`}
	max-height: 23px;
	span {
		display: inline-block;
		padding: 1px 8px;
	}
	background-color: ${(props) => props.$currentColor};
`;

export const SplitLabels = styled.div`
	width: max-content;
	display: flex;
	flex-direction: column;
	gap: 4px;
	justify-content: center;
	align-items: center;
`;
