import React from 'react';
import { Form, FormItemProps } from 'antd';

const { Item } = Form;

type ItemProps = FormItemProps & {
	wrap?: boolean;
};

const UIFormItem: React.FC<ItemProps> = ({ wrap, ...props }) => {
	return <Item {...props} />;
};

UIFormItem.displayName = 'FormItem';

export default UIFormItem;

export type { FormItemProps as UIFormItemProps };
