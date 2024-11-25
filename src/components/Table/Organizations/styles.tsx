import styled from 'styled-components';

export const SystemDefault = styled.span<{ $noSpace?: boolean }>`
	background-color: #252d64;
	font-family: 'ArabicPro-Bold', sans-serif;
	font-weight: 500;
	border-radius: 3px;
	padding: 0.25rem;
	margin-left: ${(props) => (props.$noSpace ? 0 : '1rem')};
	font-size: 0.85rem;
	color: #fff;
	word-break: keep-all;
	white-space: pre;
`;

export const TotalDescription = styled.p`
	font-family: 'ArabicPro-Regular', sans-serif;
`;

export const OwnerField = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const OwnerBadge = styled.div<{ $type: 'admin' | 'owner' | 'viewer' }>`
	width: max-content;
	text-transform: uppercase;
	border-radius: 2px;
	padding: 2px 4px;
	color: #fff;
	word-break: keep-all;
	white-space: pre;
	background-color: ${({ $type }) => {
		switch ($type) {
			case 'admin':
				return '#E69138';
			case 'owner':
				return '#FE4646';
			case 'viewer':
				return '#47D3FE';

			default:
				return '#000';
		}
	}};
`;

export const Badge = styled.div<{ $type: 'slack' | 'rocketchat' | 'email' | 'webhook' | 'teams' }>`
	width: max-content;
	text-transform: uppercase;
	border-radius: 2px;
	padding: 2px 4px;
	color: #fff;

	background-color: ${({ $type }) => {
		switch ($type) {
			case 'slack':
				return '#4578E6';
			case 'rocketchat':
				return '#008080';
			case 'email':
				return '#4FDA9D';
			case 'webhook':
				return '#DC3545';
			case 'teams':
				return '#6FB3FF';
			default:
				return '#000';
		}
	}};
`;
