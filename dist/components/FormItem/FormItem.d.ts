import React from 'react';
import { FormItemProps } from 'antd';
type ItemProps = FormItemProps & {
    wrap?: boolean;
};
declare const UIFormItem: React.FC<ItemProps>;
export default UIFormItem;
export type { FormItemProps as UIFormItemProps };
