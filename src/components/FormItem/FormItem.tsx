import React from 'react';
import { Form, FormItemProps } from 'antd';
import styled from 'styled-components';
import colors from '../../_util/colors';

const { Item } = Form;

type ItemProps = FormItemProps & {
	wrap?: boolean;
};

const UIFormItem: React.FC<ItemProps> = ({ wrap, ...props }) => {
	return <StyledItem {...props} $wrap={wrap} />;
};

const StyledItem = styled(Item)<{ $wrap?: boolean }>`
	&.ant-form-item {
		label {
			font-size: 0.8rem;
			line-height: 1.5rem;
			font-weight: light;
			color: ${(props) => (props.theme.colorScheme === 'dark' ? colors.white : '#00000099')};
		}
		input {
			width: 55%;
			&::placeholder {
				color: hotpink;
				font-size: 0.85rem;
				color: #7b7b75;
			}
		}
	}
	&.ant-form-item .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
		&::before {
			display: none;
		}
		&::after {
			content: '* :';
			margin-inline-start: 1px;
			@supports (-webkit-background-clip: text) {
				color: transparent;
				background: ${(props) =>
					props.theme.colorScheme === 'dark'
						? `linear-gradient(
          to right,
          #e30000 0%,
          #e30000 50%,
          ${colors.white} 50%,
          ${colors.white} 100%
        );`
						: `linear-gradient(
          to right,
          #e30000 0%,
          #e30000 50%,
          black 50%,
          black 100%
        )`};
				-webkit-background-clip: text;
			}
		}
	}
`;

UIFormItem.displayName = 'FormItem';

export default UIFormItem;

export type { FormItemProps as UIFormItemProps };
