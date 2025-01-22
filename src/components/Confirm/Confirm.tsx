import React, { forwardRef } from 'react';
import { Popconfirm, PopconfirmProps } from 'antd';
const UIConfirm = forwardRef<HTMLDivElement, PopconfirmProps>((props, ref) => {
	const { className, style, ...rest } = props;

	return (
		<Popconfirm
			getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
			ref={ref}
			overlayClassName={`ui-confirm ${className ?? ''}`}
			style={style}
			{...rest}
		/>
	);
});

export type { PopconfirmProps as UIConfirmProps };

UIConfirm.displayName = 'Confirm';
export default UIConfirm;
