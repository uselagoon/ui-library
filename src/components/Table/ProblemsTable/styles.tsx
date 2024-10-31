import styled from 'styled-components';

export const ProblemIdentifier = styled.span`
	text-decoration: underline;
`;

export const WrappedText = styled.div`
	max-height: 100px !important;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	line-height: 1.25;
`;
