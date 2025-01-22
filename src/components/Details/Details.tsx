import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import React, { FC } from 'react';

type ItemType = {
	prefixCls?: string;
	className?: string;
	style?: React.CSSProperties;
	label?: React.ReactNode;
	labelStyle?: React.CSSProperties;
	contentStyle?: React.CSSProperties;
	children: React.ReactNode;
	key?: React.Key;
};

export type DetailsType = Omit<DescriptionsProps, 'items'> &
	(
		| {
				type: 'topToBottom';
				items?: ItemType[];
		  }
		| {
				type?: 'default';
				items?: DescriptionsProps['items'];
		  }
	);

const UIDetails: FC<DetailsType> = (props) => {
	const { className, items, type = 'default', style, ...rest } = props;

	if (type === 'topToBottom') {
		// max span
		const itemsToUse = items?.map((item) => ({
			...item,
			span: 24,
		}));

		return <Descriptions items={itemsToUse} {...rest} />;
	}

	return <Descriptions items={items} {...rest} />;
};
UIDetails.displayName = 'Details';

export default UIDetails;
