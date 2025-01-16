import styled from 'styled-components';
import Button from '../../Button';
import Head2 from '../../Heading/H2';
import Text from '../../Text';
import { Form } from 'antd';
import colors from '../../../_util/colors';

export const ModalButton = styled(Button)`
	background: transparent !important;
	border: 1px solid ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#000')};
	color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#000')} !important;
	border-radius: 0;
`;

export const ModalHeader = styled(Head2)`
	margin-bottom: 0 !important;
	margin-top: 10px !important;
`;

export const ModalText = styled(Text)`
	font-size: 11px !important;
	transform: translateY(-5px) !important;
`;

export const ModalForm = styled(Form)`
	.ant-row.ant-form-item-row {
		flex-direction: column;
		margin-bottom: 3.5rem !important;
		&:first-child {
			margin-top: 2rem;
		}
	}
	.ant-col {
		text-align: justify !important;
	}
`;

export const Highlighted = styled.span`
	font-weight: 600;
	color: ${colors.lagoonBlue};
`;

export const SShSummary = styled.div`
	display: block;
`;
