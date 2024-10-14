import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

export const StyledSearch = styled(Search)`
	&,
	& > * {
		background-color: transparent;
	}
	.ant-input-wrapper {
		border-bottom: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#6b6b6e' : '#0c0c0c')};
		background-color: transparent;
		& > * {
			background-color: transparent;
		}
		.ant-input-affix-wrapper {
			padding-inline: 0;
		}
		.ant-input-group-addon {
			button {
				user-select: none;
				pointer-events: none;
				background: transparent;
				border: none;
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#6b6b6e' : '#0c0c0c')} !important;
				.ant-btn-icon {
					span[role='img'] {
						font-size: 22px;
					}
				}
			}
		}
		input {
			padding-left: 0;
			color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fafafa' : '#0c0c0c')};
			&::placeholder {
				color: ${(props) => (props.theme.colorScheme === 'dark' ? '#6b6b6e' : '#0c0c0c')};
			}
		}
	}
`;

export const StyledFilter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 26px;
	.select-container {
		display: flex;
		gap: 5px;
	}
`;
