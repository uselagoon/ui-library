import React, { forwardRef } from 'react';
import { Popconfirm, PopconfirmProps } from 'antd';
import styled from 'styled-components';

const UIConfirm = forwardRef<HTMLDivElement, PopconfirmProps>((props, ref) => {
	const { className, style, ...rest } = props;

	return (
		<StyledConfirm>
			<Popconfirm
				getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
				ref={ref}
				overlayClassName={`ui-confirm ${className ?? ''}`}
				style={style}
				{...rest}
			/>
		</StyledConfirm>
	);
});

const StyledConfirm = styled.div`
	.ant-popover-inner {
		background-color: ${(props) => props.theme.UI.confirm.background};
	}
	.ant-popconfirm .ant-popconfirm-message .ant-popconfirm-title {
		color: ${(props) => props.theme.UI.confirm.text} !important;
	}
	.ant-popconfirm .ant-popconfirm-message .ant-popconfirm-description {
		color: ${(props) => props.theme.UI.confirm.text} !important;
	}

	.ant-popover-arrow::before {
		background-color: ${(props) => props.theme.UI.confirm.background};
	}
`;

export type { PopconfirmProps as UIConfirmProps };

UIConfirm.displayName = 'Confirm';
export default UIConfirm;
