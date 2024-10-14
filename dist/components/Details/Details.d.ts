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
export type DetailsType = Omit<DescriptionsProps, 'items'> & ({
    type: 'topToBottom';
    items?: ItemType[];
} | {
    type?: 'default';
    items?: DescriptionsProps['items'];
});
declare const UIDetails: FC<DetailsType>;
export default UIDetails;
