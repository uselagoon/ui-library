import { Collapse, CollapseProps } from 'antd';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export type UICollapseProps = CollapseProps['items'] & CollapseProps;

const UICollapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
	const { className, items, style, ...rest } = props;
	return <StyledCollapse ref={ref} items={items} {...rest} />;
});
UICollapse.displayName = 'Collapse';

const StyledCollapse = styled(Collapse)`
	&.ant-collapse {
		font-family: 'ArabicPro-Regular', sans-serif;
		font-size: 14px;
		line-height: 22px;
		overflow: hidden;
		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				&.ant-collapse > .ant-collapse-item > .ant-collapse-header {
					background-color: ${colors.darkGray};
					color: ${colors.white};
				}
				.ant-collapse-content-box {
					background-color: ${colors.gray};
				}
			`}
	}
`;
export default UICollapse;
